import {
  LeafIcon,
  PaletteIcon,
  ScissorsIcon,
  SparkleIcon,
} from "@phosphor-icons/react/dist/ssr";

import image1 from "/src/assets/image3.webp";
import image2 from "/src/assets/image13.webp";
import image3 from "/src/assets/image14.webp";
import image4 from "/src/assets/image12.webp";

export const services = [
  {
    id: 0,
    icon: ScissorsIcon,
    tag: "Haircut & Styling",
    name: "Precision cuts for every personality",
    description:
      "Whether you’re after a clean professional look, a trendy Korean-inspired style, or a light refresh, our stylists combine technical precision with modern creativity to achieve the perfect result.",
    list: [
      {
        title: "Women’s Haircut & Blow Dry",
        desc: "Tailored shapes, soft layers, and polished finishes.",
      },
      {
        title: "Men’s Haircut & Styling",
        desc: "Fades, texture cuts, and classic looks with a modern twist.",
      },
      {
        title: "Kids’ Haircut",
        desc: "Gentle styling for young ones, ensuring comfort and confidence.",
      },
      {
        title: "Wash & Blow",
        desc: "Smooth, glossy finishes for every occasion.",
      },
    ],
    image: image1,
    href: "/services#haircut-styling",
  },
  {
    id: 1,
    icon: PaletteIcon,
    tag: "Colouring & Highlights",
    name: "Vibrant tones. Subtle shades. Endless possibilities.",
    description:
      "Our colour experts create hues that enhance your features, complement your skin tone, and make your style shine. From subtle highlights to full transformations — we’ve got you covered.",
    list: [
      {
        title: "Full Hair Colour",
        desc: "Rich, even tones for a refreshed look.",
      },
      {
        title: "Balayage & Ombre",
        desc: "Natural, sun-kissed gradients that grow beautifully.",
      },
      {
        title: "Highlights & Lowlights",
        desc: "Dimensional colour that adds movement and depth.",
      },
      {
        title: "Root Touch-Up",
        desc: "Seamless coverage for long-lasting colour confidence.",
      },
    ],
    image: image2,
    href: "/services#colouring-highlights",
  },
  {
    id: 2,
    icon: LeafIcon,
    tag: "Treatment & Care",
    name: "Healthy hair starts with proper care",
    description:
      "We use salon-grade treatments to restore moisture, strengthen damaged strands, and rejuvenate tired hair. Perfect for those who colour or style often, or simply want healthier hair.",
    list: [
      {
        title: "Deep Conditioning Treatment",
        desc: "Restores softness and shine.",
      },
      {
        title: "Keratin Smoothing",
        desc: "Eliminates frizz and strengthens hair structure.",
      },
      {
        title: "Scalp Detox & Massage",
        desc: "Improves scalp health and circulation.",
      },
      {
        title: "Repair & Rebonding Treatments",
        desc: "Rebuilds strength for chemically treated hair.",
      },
    ],
    image: image3,
    href: "/services#hair-treatment-care",
  },
  {
    id: 3,
    icon: SparkleIcon,
    tag: "Styling & Events",
    name: "Look your best for every occasion",
    description:
      "From weddings to formal dinners and festive celebrations, we bring your desired look to life. Let our stylists handle the details while you shine with confidence.",
    list: [
      {
        title: "Bridal & Engagement Styling",
        desc: "Elegant, camera-ready looks that last.",
      },
      {
        title: "Event & Dinner Styling",
        desc: "Sleek, voluminous, or creative updos.",
      },
      {
        title: "Hair Setting & Curling",
        desc: "Long-lasting styles for day-to-night confidence.",
      },
      {
        title: "Men’s Grooming & Styling",
        desc: "Sharp, refined finishes for special occasions.",
      },
    ],
    image: image4,
    href: "/services#styling-special-occasions",
  },
];
