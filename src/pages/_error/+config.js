// src/pages/_error/+config.js
export default {
  onBeforeRender: () => import("./+onBeforeRender.server.js"),
};
