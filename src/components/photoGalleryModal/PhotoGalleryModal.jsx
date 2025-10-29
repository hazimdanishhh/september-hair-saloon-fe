import { useState, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  XIcon,
  CaretLeftIcon,
  CaretRightIcon,
} from "@phosphor-icons/react/dist/ssr";
import { photoGalleryImages } from "../../data/photoGalleryData";
import "./PhotoGalleryModal.scss";

export default function PhotoGalleryModal({ galleryIsOpen, setGalleryIsOpen }) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const selectedImage = photoGalleryImages[selectedIndex];
  const carouselRef = useRef(null);

  const handleNext = () => {
    setSelectedIndex((prev) => (prev + 1) % photoGalleryImages.length);
    scrollToThumbnail(selectedIndex + 1);
  };

  const handlePrev = () => {
    setSelectedIndex(
      (prev) =>
        (prev - 1 + photoGalleryImages.length) % photoGalleryImages.length
    );
    scrollToThumbnail(selectedIndex - 1);
  };

  const scrollToThumbnail = (index) => {
    if (carouselRef.current) {
      const thumbnails = carouselRef.current.querySelectorAll("img");
      const target = thumbnails[index];
      if (target) {
        target.scrollIntoView({ behavior: "smooth", inline: "center" });
      }
    }
  };

  return (
    <AnimatePresence mode="wait">
      {galleryIsOpen && (
        <motion.div
          className="photo-gallery-modal"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
        >
          <div className="photo-gallery-heading">
            <span>
              Image {selectedIndex + 1} / {photoGalleryImages.length}
            </span>

            <button
              className="close-button"
              onClick={() => setGalleryIsOpen(false)}
            >
              <XIcon />
            </button>
          </div>

          <div className="image-container">
            <button className="nav-button left" onClick={handlePrev}>
              <CaretLeftIcon size={28} weight="bold" />
            </button>

            <motion.img
              key={selectedImage}
              src={selectedImage}
              alt={`Selected ${selectedIndex + 1}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              loading="lazy"
            />

            <button className="nav-button right" onClick={handleNext}>
              <CaretRightIcon size={28} weight="bold" />
            </button>
          </div>

          <div className="image-carousel-layout">
            <button className="carousel-nav left" onClick={handlePrev}>
              <CaretLeftIcon size={20} weight="bold" />
            </button>

            <div className="image-carousel" ref={carouselRef}>
              {photoGalleryImages.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Gallery ${index + 1}`}
                  onClick={() => setSelectedIndex(index)}
                  className={index === selectedIndex ? "active" : ""}
                  loading="lazy"
                />
              ))}
            </div>

            <button className="carousel-nav right" onClick={handleNext}>
              <CaretRightIcon size={20} weight="bold" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
