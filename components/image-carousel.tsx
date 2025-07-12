"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react"; // Import icons

interface ImageCarouselProps {
  images: string[]; // Array of image descriptions (will use placeholders)
  interval?: number; // Time in ms to switch images
}

export function ImageCarousel({ images, interval = 3000 }: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval);

    return () => clearInterval(timer);
  }, [images.length, interval]);

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  if (images.length === 0) {
    return (
      <div className="flex items-center justify-center h-48 bg-muted rounded-lg text-muted-foreground">
        No images available for this event.
      </div>
    );
  }

  return (
    <div className="relative w-full h-[400px] overflow-hidden rounded-lg bg-muted group">
      <AnimatePresence initial={false} mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: currentIndex > 0 ? 50 : -50 }} // Initial position for slide-in effect
          animate={{ opacity: 1, x: 0 }} // Animate to center
          exit={{ opacity: 0, x: currentIndex > 0 ? -50 : 50 }} // Exit position for slide-out effect
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <img
            src={`${images[currentIndex]}`}
            alt={"Carousel Image " + (currentIndex + 1)}
            className="w-full h-full object-contain rounded-lg"
          />
          {/* <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-4 text-white text-sm font-medium">
            {images[currentIndex]}
          </div> */}
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows */}
      {images.length > 1 && (
        <>
          <motion.button
            onClick={handlePrev}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            aria-label="Previous image"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronLeft className="h-6 w-6" />
          </motion.button>
          <motion.button
            onClick={handleNext}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            aria-label="Next image"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronRight className="h-6 w-6" />
          </motion.button>
        </>
      )}

      {/* Pagination Dots */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex space-x-1">
        {images.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-1 w-4 rounded-full ${
              index === currentIndex ? "bg-white" : "bg-white/50"
            } transition-colors duration-300`}
            aria-label={`View image ${index + 1}`}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
          />
        ))}
      </div>

      {/* Image Counter */}
      <div className="absolute top-2 right-2 bg-black/50 text-white text-xs px-2 py-1 rounded-full z-10">
        {currentIndex + 1} / {images.length}
      </div>
    </div>
  );
}
