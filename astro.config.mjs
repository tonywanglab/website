// @ts-check
import { defineConfig } from "astro/config";

const escapeHtml = (value) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");

/**
 * Hand off ```mermaid fences to the client renderer instead of the syntax
 * highlighter. Runs as a remark plugin so the diagram source reaches the DOM
 * as plain text — Shiki would otherwise wrap every token in a span.
 */
function remarkMermaid() {
  return (tree) => {
    const walk = (node) => {
      if (node.type === "code" && node.lang === "mermaid") {
        node.type = "html";
        node.value = `<pre class="mermaid">${escapeHtml(node.value)}</pre>`;
        return;
      }
      for (const child of node.children ?? []) walk(child);
    };
    walk(tree);
  };
}

// Update `site` to your deployed URL — used for RSS and canonical links.
export default defineConfig({
  site: "https://tonywang.us",
  markdown: {
    remarkPlugins: [remarkMermaid],
    // Shiki ships its own themed background, which fights the paper palette.
    // Code blocks are styled from the site tokens instead.
    syntaxHighlight: false,
  },
  vite: {
    // Mermaid is only reached through a dynamic import, so dev would otherwise
    // discover it mid-request and answer with a 504 Outdated Optimize Dep.
    optimizeDeps: { include: ["mermaid"] },
  },
});
