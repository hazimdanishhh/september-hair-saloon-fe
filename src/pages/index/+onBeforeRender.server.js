// src/pages/index/+onBeforeRender.server.js

const BASE_URL = (
  process.env.VITE_SITE_BASE_URL || "http://localhost:3000"
).replace(/\/+$/, "");

export function onBeforeRender() {
  const fullUrl = `${BASE_URL}/`; // Home page always ends with "/"
  const title =
    "September Hair Saloon | Professional Hair Styling in Wangsa Maju";
  const description =
    "Experience September Hair Saloon — Wangsa Maju’s trusted destination for professional haircuts, colouring, and styling. Our experienced stylists deliver modern looks for men and women in a relaxing, friendly environment. Book your appointment today and redefine your style with confidence.";
  const image = `${BASE_URL}/og-images/home.jpg`;

  return {
    pageContext: {
      documentProps: {
        title,
        description,
        url: fullUrl,
        image,
        structuredData: [
          {
            "@context": "https://schema.org",
            "@type": "HairSalon",
            name: "September Hair Saloon",
            url: fullUrl,
            logo: `${BASE_URL}/logo.png`,
            description: description,
            address: {
              "@type": "PostalAddress",
              streetAddress: "Wangsa Maju",
              addressLocality: "Kuala Lumpur",
              addressRegion: "Wilayah Persekutuan",
              addressCountry: "Malaysia",
            },
            telephone: "+60 12-345 6789",
            sameAs: [
              "https://www.instagram.com/septemberhairsaloon",
              "https://www.facebook.com/septemberhairsaloon",
            ],
          },
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            url: fullUrl,
            name: "September Hair Saloon",
            potentialAction: {
              "@type": "SearchAction",
              target: `${BASE_URL}/search?q={search_term_string}`,
              "query-input": "required name=search_term_string",
            },
          },
        ],
      },
    },
  };
}
