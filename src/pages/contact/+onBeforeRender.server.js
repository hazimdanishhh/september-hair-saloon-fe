// src/pages/contact/+onBeforeRender.server.js

const BASE_URL = (
  process.env.VITE_SITE_BASE_URL || "http://localhost:3000"
).replace(/\/+$/, "");

export function onBeforeRender() {
  const fullUrl = `${BASE_URL}/contact/`;
  const title = "Contact & Booking | September Hair Saloon Wangsa Maju";
  const description =
    "Get in touch with September Hair Saloon — Wangsa Maju’s trusted hairstylists. Book your haircut, colouring, or styling appointment today via WhatsApp or visit us in person for a personalized experience.";
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
            openingHours: ["Mo-Su 10:00-20:00"],
            sameAs: [
              "https://www.instagram.com/septemberhairsaloon",
              "https://www.facebook.com/septemberhairsaloon",
            ],
            hasMap:
              "https://www.google.com/maps?q=September+Hair+Saloon+Wangsa+Maju",
          },
          {
            "@context": "https://schema.org",
            "@type": "ContactPage",
            url: fullUrl,
            name: "Contact & Booking - September Hair Saloon",
            description:
              "Contact page for September Hair Saloon, Wangsa Maju — reach us by phone, WhatsApp, or visit our salon to book your next haircut or colour session.",
            potentialAction: {
              "@type": "CommunicateAction",
              target: `${BASE_URL}/contact`,
              "query-input": "required name=contact_form_input",
            },
          },
        ],
      },
    },
  };
}
