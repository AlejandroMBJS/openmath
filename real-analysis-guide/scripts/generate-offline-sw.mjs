import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(scriptDir, "..");
const distDir = path.join(repoRoot, "docs", ".vitepress", "dist");
const githubRepository = process.env.GITHUB_REPOSITORY;
const githubRepositoryName = githubRepository?.split("/")[1];
const docsBase =
  process.env.DOCS_BASE ??
  (process.env.GITHUB_ACTIONS === "true" && githubRepositoryName ? `/${githubRepositoryName}/` : "/");
const base = docsBase.endsWith("/") ? docsBase : `${docsBase}/`;
const version = process.env.GITHUB_SHA?.slice(0, 8) ?? `${Date.now()}`;

const walk = (dir) => {
  const entries = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const resolved = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      entries.push(...walk(resolved));
    } else {
      entries.push(resolved);
    }
  }
  return entries;
};

const toPosix = (value) => value.split(path.sep).join("/");
const files = walk(distDir)
  .map((file) => toPosix(path.relative(distDir, file)))
  .filter((file) => file !== "sw.js");

const assetUrls = [];
const routeEntries = [];
for (const file of files) {
  const fileUrl = `${base}${file}`;
  assetUrls.push(fileUrl);

  if (!file.endsWith(".html") || file === "404.html" || file === "offline.html") {
    continue;
  }

  if (file === "index.html") {
    routeEntries.push({ route: base, file: fileUrl });
    routeEntries.push({ route: `${base}index.html`, file: fileUrl });
    continue;
  }

  if (file.endsWith("/index.html")) {
    const route = `${base}${file.slice(0, -"index.html".length)}`;
    routeEntries.push({ route, file: fileUrl });
    routeEntries.push({ route: `${route}index.html`, file: fileUrl });
    continue;
  }

  routeEntries.push({ route: `${base}${file.slice(0, -".html".length)}`, file: fileUrl });
  routeEntries.push({ route: fileUrl, file: fileUrl });
}

const serviceWorker = `const CACHE_NAME = ${JSON.stringify(`openmath-offline-${version}`)};
const BASE_PATH = ${JSON.stringify(base)};
const OFFLINE_URL = ${JSON.stringify(`${base}offline.html`)};
const ASSETS = ${JSON.stringify(assetUrls, null, 2)};
const ROUTES = ${JSON.stringify(routeEntries, null, 2)};

const sameOrigin = (url) => url.origin === self.location.origin && url.pathname.startsWith(BASE_PATH);

async function cacheAll() {
  const cache = await caches.open(CACHE_NAME);

  for (const url of ASSETS) {
    try {
      const response = await fetch(url, { cache: "no-cache" });
      if (response.ok) {
        await cache.put(url, response.clone());
      }
    } catch (error) {
      console.warn("offline asset cache failed", url, error);
    }
  }

  for (const entry of ROUTES) {
    try {
      const response = await fetch(entry.file, { cache: "no-cache" });
      if (response.ok) {
        await cache.put(entry.route, response.clone());
        if (entry.file !== entry.route) {
          await cache.put(entry.file, response.clone());
        }
      }
    } catch (error) {
      console.warn("offline route cache failed", entry.route, error);
    }
  }
}

self.addEventListener("install", (event) => {
  event.waitUntil((async () => {
    await cacheAll();
    await self.skipWaiting();
  })());
});

self.addEventListener("activate", (event) => {
  event.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key)));
    await self.clients.claim();
  })());
});

async function handleNavigation(request) {
  const cache = await caches.open(CACHE_NAME);
  const url = new URL(request.url);
  const candidates = [];

  if (url.pathname === BASE_PATH.slice(0, -1)) {
    candidates.push(BASE_PATH);
  }
  candidates.push(url.pathname);
  if (!url.pathname.endsWith("/") && !url.pathname.split("/").pop().includes(".")) {
    candidates.push(url.pathname + ".html");
  }
  if (url.pathname.endsWith("/")) {
    candidates.push(url.pathname + "index.html");
  }

  for (const candidate of candidates) {
    const cached = await cache.match(candidate);
    if (cached) return cached;
  }

  try {
    const response = await fetch(request);
    if (response.ok) {
      await cache.put(url.pathname, response.clone());
    }
    return response;
  } catch (error) {
    return (await cache.match(OFFLINE_URL)) || Response.error();
  }
}

async function handleAsset(request) {
  const cache = await caches.open(CACHE_NAME);
  const cached = await cache.match(request);
  if (cached) return cached;

  try {
    const response = await fetch(request);
    if (response.ok) {
      await cache.put(request, response.clone());
    }
    return response;
  } catch (error) {
    return cached || Response.error();
  }
}

self.addEventListener("fetch", (event) => {
  const request = event.request;
  if (request.method !== "GET") return;

  const url = new URL(request.url);
  if (!sameOrigin(url)) return;

  if (request.mode === "navigate") {
    event.respondWith(handleNavigation(request));
    return;
  }

  event.respondWith(handleAsset(request));
});
`;

fs.writeFileSync(path.join(distDir, "sw.js"), serviceWorker);
