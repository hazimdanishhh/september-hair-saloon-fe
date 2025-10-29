// src/renderer/+onRenderHtml.jsx
import React from "react";
import ReactDOMServer from "react-dom/server";
import { escapeInject, dangerouslySkipEscape } from "vike/server";
import { PageShell } from "./PageShell";

export default async function onRenderHtml(pageContext) {
  const { Page, pageProps, documentProps } = pageContext;

  const title = documentProps?.title || "Default Title";
  const description = documentProps?.description || "Default Description";
  const url = documentProps?.url || "http://localhost:3000";
  const image = documentProps?.image || `${url}og-images/default.jpg`;
  const structuredData = documentProps?.structuredData || [];

  const appHtml = ReactDOMServer.renderToString(
    <PageShell pageContext={pageContext}>
      <Page {...pageProps} />
    </PageShell>
  );

  const styleTags = pageContext.styleTags || ""; // keep safe if undefined

  // extract href values from styleTags
  const cssHrefs =
    styleTags
      .match(/href="([^"]+)"/g)
      ?.map((m) => m.replace(/href="/, "").replace(/"$/, "")) || [];

  // create preload links for each CSS file
  const cssPreloadLinks = cssHrefs
    .map((href) => `<link rel="preload" as="style" href="${href}">`)
    .join("\n");

  return {
    documentHtml: escapeInject`<!DOCTYPE html>
    <html lang="en">
      <head>
        <!-- Character Set & Viewport -->
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <!-- Favicons & Manifest -->
        <link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <meta name="apple-mobile-web-app-title" content="September Hair Saloon" />
        <link rel="manifest" href="/site.webmanifest" />

        <!-- Preconnects -->
        <link rel="preconnect" href=${url} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link rel="preconnect" href="https://www.google.com" />
        <link rel="preconnect" href="https://maps.googleapis.com" />

        <!-- Dynamic CSS preloads (generated from Vite/Vike build assets) -->
        ${dangerouslySkipEscape(cssPreloadLinks)}

        <!-- Inject the real stylesheet tags produced by Vite/Vike -->
        ${dangerouslySkipEscape(styleTags)}

        <!-- Load font stylesheet asynchronously -->
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          media="print"
          onload="this.media='all'"
        />
        <noscript>
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          />
        </noscript>

        <!-- Meta & SEO -->
        <title>${title}</title>
        <meta name="description" content="${description}" />
        <meta name="title" content="${title}" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="September Hair Saloon" />
        <meta name="publisher" content="September Hair Saloon" />
        <link rel="canonical" href="${url}" />

        <!-- Open Graph / Facebook -->
        <meta property="og:type" content="website" />
        <meta property="og:url" content="${url}" />
        <meta property="og:title" content="${title}" />
        <meta property="og:description" content="${description}" />
        <meta property="og:image" content="${image}" />
        <meta property="og:site_name" content="September Hair Saloon" />
        <meta property="og:locale" content="en_MY" />

        <!-- Twitter -->
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="${title}" />
        <meta name="twitter:description" content="${description}" />
        <meta name="twitter:image" content="${image}" />

        <!-- Structured Data (JSON-LD) -->
        ${dangerouslySkipEscape(
          structuredData
            .map(
              (schema) =>
                `<script type="application/ld+json">${JSON.stringify(
                  schema
                )}</script>`
            )
            .join("")
        )}
      </head>
      <body>
        <div id="page-view">${dangerouslySkipEscape(appHtml)}</div>
      </body>
    </html>`,
  };
}
