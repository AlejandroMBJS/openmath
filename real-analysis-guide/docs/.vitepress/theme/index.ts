import DefaultTheme from "vitepress/theme";
import { inBrowser, useRoute } from "vitepress";
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
    });

    onUnmounted(() => {
      window.removeEventListener("mathjax-ready", queueTypeset);
    });

    watch(() => route.path, queueTypeset, { immediate: true, flush: "post" });
  }
};
