"use client";
import { useState, useEffect, SetStateAction } from "react";

export default function ModernFeaturedSlider() {
  const slides = [
    {
      img: "/api/placeholder/600/300",
      author: "Steven Gambardella - lifestyle",
      title: "You Are Wasting 70% Of Your Life By Doing This!",
      bgColor: "bg-orange-50"
    },
    {
      img: "/api/placeholder/600/300",
      author: "Jane Doe - music",
      title: "Stop Listening to Music and Boost Your Productivity",
      bgColor: "bg-blue-50"
    },
    {
      img: "/api/placeholder/600/300",
      author: "John Smith - tech",
      title: "Discover the Hidden Tech That Rules Your Life",
      bgColor: "bg-green-50"
    },
  ];

  const [current, setCurrent] = useState(0);

  // Auto Slide logic
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index: SetStateAction<number>) => {
    setCurrent(index);
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  // Calculate previous and next indices for side slides
  const prevIndex = (current - 1 + slides.length) % slides.length;
  const nextIndex = (current + 1) % slides.length;

  return (
    <div className="relative w-full mx-auto px-4">
      {/* Main container with side previews */}
      <div className="flex items-center justify-center relative">
        {/* Previous slide (small) */}
        <div className="hidden md:block w-1/4 opacity-50 transform scale-75 mr-4">
          <div className={`rounded-lg overflow-hidden shadow-md ${slides[prevIndex].bgColor}`}>
          <img
              src={slides[prevIndex].img}
              alt="Previous"
              className="w-full h-40 object-cover opacity-75"
            />
          </div>
        </div>

        {/* Current slide (main) */}
        <div className="w-full md:w-2/3 relative z-10">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`transition-all duration-500 ease-in-out absolute w-full ${
                index === current ? "opacity-100 z-10" : "opacity-0 z-0"
              }`}
              style={{ transform: index === current ? 'scale(1)' : 'scale(0.95)' }}
            >
              <div className="rounded-xl overflow-hidden shadow-lg bg-white">
                <div className="relative">
                  <img
                    src={slide.img}
                    alt={slide.title}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent p-6 flex flex-col justify-end">
                    <div className="flex items-center mb-2">
                      <div className="w-6 h-6 rounded-full bg-orange-500 flex items-center justify-center text-white text-xs mr-2">
                        S
                      </div>
                      <p className="text-sm text-orange-400 font-medium">{slide.author}</p>
                    </div>
                    <h2 className="text-white text-xl md:text-2xl font-bold">{slide.title}</h2>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Next slide (small) */}
        <div className="hidden md:block w-1/4 opacity-50 transform scale-75 ml-4">
          <div className={`rounded-lg overflow-hidden shadow-md ${slides[nextIndex].bgColor}`}>
            <img
              src={slides[nextIndex].img}
              alt="Next"
              className="w-full h-40 object-cover opacity-75"
            />
          </div>
        </div>
      </div>

      {/* Navigation dots */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex space-x-2 pb-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === current ? "w-6 bg-gray-800" : "bg-gray-300"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          ></button>
        ))}
      </div>

      {/* Arrow buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-white/80 rounded-full shadow-md z-20 opacity-70 hover:opacity-100 transition-opacity"
        aria-label="Previous slide"
      >
        <span className="sr-only">Previous</span>
        ◀
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-white/80 rounded-full shadow-md z-20 opacity-70 hover:opacity-100 transition-opacity"
        aria-label="Next slide"
      >
        <span className="sr-only">Next</span>
        ▶
      </button>
    </div>
  );
}