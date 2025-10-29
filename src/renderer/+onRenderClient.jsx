// src/renderer/+onRenderClient.jsx
import React from "react";
import { hydrateRoot } from "react-dom/client";
import { PageShell } from "./PageShell";

export default function onRenderClient(pageContext) {
  const { Page, pageProps } = pageContext;

  hydrateRoot(
    document.getElementById("page-view"),
    <React.StrictMode>
      <PageShell pageContext={pageContext}>
        <Page {...pageProps} />
      </PageShell>
    </React.StrictMode>
  );
}
