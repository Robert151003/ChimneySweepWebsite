'use client'

import Image from "next/image";
import { useState } from "react";

const CarouselWrapper = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    "/Images/CarouselImages/image1.jpg",
    "/Images/CarouselImages/image2.jpg",
    "/Images/CarouselImages/image3.jpg",
    "/Images/CarouselImages/image4.jpg",
    "/Images/CarouselImages/image5.jpg",
    "/Images/CarouselImages/image6.jpg",
    "/Images/CarouselImages/image7.jpg",
    "/Images/CarouselImages/image8.jpg",
    "/Images/CarouselImages/image9.jpg",
    "/Images/CarouselImages/image10.jpg",
    "/Images/CarouselImages/image11.jpg",
    "/Images/CarouselImages/image12.jpg",
  ];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="flex justify-center items-center my-8">
      <div className="relative w-full max-w-8xl h-[500px] perspective-1000 overflow-hidden">
        <div className="relative w-full h-full flex items-center justify-center">
          {images.map((image, index) => {
            const isActive = index === currentIndex;
            const isPrevious = index === (currentIndex - 1 + images.length) % images.length;
            const isNext = index === (currentIndex + 1) % images.length;

            let transform = "translateX(100%) scale(0.8) translateZ(-200px)";
            let zIndex = "1";
            let opacity = "0.5";

            if (isActive) {
              transform = "translateX(0) scale(1) translateZ(0)";
              zIndex = "10";
              opacity = "1";
            } else if (isPrevious) {
              transform = "translateX(-100%) scale(0.8) translateZ(-200px)";
              zIndex = "5";
              opacity = "0.8";
            } else if (isNext) {
              transform = "translateX(100%) scale(0.8) translateZ(-200px)";
              zIndex = "5";
              opacity = "0.8";
            }

            return (
              <div
                key={index}
                className={`absolute w-[60%] h-full transition-transform duration-700 ease-in-out`}
                style={{
                  transform,
                  zIndex,
                  opacity,
                  transformStyle: "preserve-3d",
                }}
              >
                <Image
                  src={image}
                  alt={`Carousel Image ${index + 1}`}
                  className="w-full h-full object-contain rounded-xl shadow-lg bg-white"
                  width={500}
                  height={500}
                />
              </div>
            );
          })}
        </div>
        <button
          onClick={handlePrev}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-black/50 text-white p-2 rounded-full"
        >
          ❮
        </button>
        <button
          onClick={handleNext}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-black/50 text-white p-2 rounded-full"
        >
          ❯
        </button>
      </div>
    </section>
  );
};

export default CarouselWrapper;