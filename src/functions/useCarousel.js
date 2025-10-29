import { useState, useEffect, useRef } from "react";

export default function useCarousel(images = [], autoplayDelay = 10000) {
  const isClient = typeof window !== "undefined";
  const [currentIndex, setCurrentIndex] = useState(0);

  const touchStartX = useRef(null);
  const touchEndX = useRef(null);
  const intervalRef = useRef(null);

  // Autoplay logic: only run on client
  useEffect(() => {
    if (!isClient || images.length === 0) return;

    function startAutoplay() {
      clearInterval(intervalRef.current);
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, autoplayDelay);
    }

    startAutoplay();
    return () => clearInterval(intervalRef.current);
  }, [isClient, images, autoplayDelay]);

  const resetAutoplay = () => {
    if (!isClient) return;
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, autoplayDelay);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
    resetAutoplay();
  };

  const handleTouchStart = (e) => {
    if (!isClient) return;
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    if (!isClient) return;
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!isClient || touchStartX.current === null || touchEndX.current === null)
      return;

    const delta = touchStartX.current - touchEndX.current;

    if (delta > 100) {
      // Swiped left
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      resetAutoplay();
    } else if (delta < -50) {
      // Swiped right
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? images.length - 1 : prevIndex - 1
      );
      resetAutoplay();
    }

    touchStartX.current = null;
    touchEndX.current = null;
  };

  return {
    currentIndex,
    goToSlide,
    handleTouchStart,
    handleTouchMove,
    handleTouchEnd,
  };
}
