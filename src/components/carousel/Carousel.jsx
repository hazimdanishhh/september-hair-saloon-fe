import { useMemo } from "react";
import images from "./images";
import "./carousel.scss";
import { motion, AnimatePresence } from "framer-motion";
import { staggerContainer, fadeInWithEase } from "/src/functions/motionUtils";
import useCarousel from "../../functions/useCarousel";
import useHydrated from "../../functions/useHydrated";
import {
  CaretDownIcon,
  CaretRightIcon,
  WhatsappLogoIcon,
} from "@phosphor-icons/react/dist/ssr";

function Carousel() {
  const hydrated = useHydrated();
  const memoizedImages = useMemo(() => images, []); // <- prevents hook changes

  const {
    currentIndex,
    goToSlide,
    handleTouchStart,
    handleTouchMove,
    handleTouchEnd,
  } = useCarousel(memoizedImages, 10000);

  if (!hydrated) {
    // ✅ Stable fallback for SSR
    return (
      <section
        className="carousel"
        style={{ height: "100vh", background: "#f8f8f8" }}
      >
        {/* optional loader, static image, etc. */}
      </section>
    );
  }

  return (
    <>
      <motion.section
        className="carousel"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <h1 className="sr-only">
          September Hair Saloon - Experience Elegance and Style
        </h1>

        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            className="carousel-slide"
            style={{ backgroundImage: `url(${images[currentIndex].src})` }}
            loading="eager"
            alt={images[currentIndex].alt}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            initial={{ opacity: 0, scale: 1 }}
            animate={{ opacity: 1, scale: 1.02 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          ></motion.div>
        </AnimatePresence>

        <div className="carousel-wrapper">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex} // Sync text with slide
              className="carousel-text"
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={staggerContainer}
            >
              <motion.h2
                className="textRegular textXXXL"
                variants={fadeInWithEase}
              >
                {images[currentIndex].title}
              </motion.h2>
              {images[currentIndex].desc && (
                <motion.p
                  className="carouselDesc textLight textM"
                  variants={fadeInWithEase}
                >
                  {images[currentIndex].desc}
                </motion.p>
              )}

              <motion.div
                variants={fadeInWithEase}
                className="carouselLinkWrapper"
              >
                <a href={images[currentIndex].href} className="carouselLink">
                  {images[currentIndex].name}
                  <CaretRightIcon size={24} />
                </a>
              </motion.div>
            </motion.div>
          </AnimatePresence>

          <div className="carousel-indicators">
            {images.map((_, index) => (
              <button
                className={`indicatorContainer ${
                  index === currentIndex ? "active" : ""
                }`}
                aria-label={`Go to slide ${index + 1}`}
                key={index}
                onClick={() => goToSlide(index)}
              >
                <div className="indicatorBackground">
                  <div className="indicator" />
                </div>
              </button>
            ))}
          </div>
        </div>
      </motion.section>
    </>
  );
}

export default Carousel;
