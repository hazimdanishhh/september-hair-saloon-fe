// src/pages/index/+config.js
export default {
  onBeforeRender: () => import("./+onBeforeRender.server.js"),
};
