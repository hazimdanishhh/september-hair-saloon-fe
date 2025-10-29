// src/renderer/+config.js
export default {
  clientRouting: false,
  hydrationCanBeAborted: true,

  trailingSlash: "never",

  prerender: {
    partial: true,
    keepDistServer: true,
    noExtraDir: true,
  },

  meta: {
    Page: {
      env: { server: true, client: true },
    },
    documentProps: {
      env: { server: true, client: true },
    },
  },
};
