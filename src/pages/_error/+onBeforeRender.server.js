// src/pages/_error/+onBeforeRender.server.js
const BASE_URL = (
  process.env.VITE_SITE_BASE_URL || "http://localhost:3000"
).replace(/\/+$/, "");

export function onBeforeRender(pageContext) {
  const is404 = pageContext?.is404 === true;

  const url = `${BASE_URL}${pageContext.urlOriginal || ""}`;
  const title = is404
    ? "404 Page Not Found | September Hair Saloon"
    : "Something Went Wrong | September Hair Saloon";
  const description = is404
    ? "Sorry, we couldn't find the page you're looking for. Please check the URL or return to the homepage."
    : "An unexpected error occurred while loading this page.";

  const image = `${BASE_URL}/og-images/home.jpg`;

  return {
    pageContext: {
      documentProps: {
        title,
        description,
        url,
        image,
        structuredData: [
          {
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: title,
            url: url,
            description: description,
            breadcrumb: {
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Home",
                  item: BASE_URL,
                },
              ],
            },
          },
        ],
      },
    },
  };
}
