import DefaultTheme from "vitepress/theme";
import { inBrowser, useRoute, withBase } from "vitepress";
import { nextTick, onMounted, onUnmounted, watch } from "vue";
import "./custom.css";

declare global {
  interface Window {
    MathJax?: {
      startup?: { promise?: Promise<unknown> };
      typesetClear?: (...items: unknown[]) => void;
      typesetPromise?: (items?: unknown[]) => Promise<unknown>;
    };
  }
}

const typesetMath = async () => {
  if (!inBrowser) return;

  const root = document.querySelector(".vp-doc");
  const mathJax = window.MathJax;
  if (!(root instanceof HTMLElement) || !mathJax?.typesetPromise) return;

  try {
    await mathJax.startup?.promise;
    mathJax.typesetClear?.([root]);
    await mathJax.typesetPromise([root]);
  } catch (error) {
    console.warn("MathJax typeset failed", error);
  }
};

const registerOfflineSupport = () => {
  if (!inBrowser || import.meta.env.DEV || !("serviceWorker" in navigator)) return;

  const register = async () => {
    try {
      await navigator.serviceWorker.register(withBase("/sw.js"));
      if (navigator.storage?.persist) {
        await navigator.storage.persist();
      }
    } catch (error) {
      console.warn("Offline support registration failed", error);
    }
  };

  if (document.readyState === "complete") {
    void register();
    return;
  }

  window.addEventListener(
    "load",
    () => {
      void register();
    },
    { once: true }
  );
};

export default {
  extends: DefaultTheme,
  setup() {
    const route = useRoute();

    const queueTypeset = () => {
      if (!inBrowser) return;
      window.requestAnimationFrame(() => {
        void nextTick(() => typesetMath());
      });
    };

    onMounted(() => {
      window.addEventListener("mathjax-ready", queueTypeset);
      registerOfflineSupport();
    });

    onUnmounted(() => {
      window.removeEventListener("mathjax-ready", queueTypeset);
    });

    watch(() => route.path, queueTypeset, { immediate: true, flush: "post" });
  }
};
