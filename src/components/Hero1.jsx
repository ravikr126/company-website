import React, { useState, useEffect } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";

function Hero1() {
  const slides = [
    {
      url: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2620&q=80",
    },
    {
      url: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80",
    },
    {
      url: "https://images.unsplash.com/photo-1661961112951-f2bfd1f253ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2672&q=80",
    },
    {
      url: "https://images.unsplash.com/photo-1512756290469-ec264b7fbf87?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2253&q=80",
    },
    {
      url: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2671&q=80",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  // Auto-slider functionality
  const autoSlideInterval = 5000; // Adjust the interval as needed (in milliseconds)

  useEffect(() => {
    const intervalId = setInterval(() => {
      nextSlide();
    }, autoSlideInterval);

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, [currentIndex]);

  return (
    <div className=" flex flex-row p-5 gap-10">
      {/* 1st slider */}

      <div className="w-1/2 h-[400px] relative group overflow-hidden ">
        
        {/* Image */}
        <div
          style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
          className="w-full h-full rounded-2xl bg-center bg-cover duration-500"
          
        ></div>

        {/* Left Arrow */}
        <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
          <BsChevronCompactLeft onClick={prevSlide} size={30} />
        </div>

        {/* Right Arrow */}
        <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
          <BsChevronCompactRight onClick={nextSlide} size={30} />
        </div>

        {/* Dot navigation */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {slides.map((slide, slideIndex) => (
            <div
              key={slideIndex}
              onClick={() => goToSlide(slideIndex)}
              className={`w-6 h-1 bg-gray-300 rounded-full transition duration-300 ${
                slideIndex === currentIndex ? "bg-blue-500" : ""
              }`}
            ></div>
          ))}
        </div>
      </div>

      {/* 2nd div */}

      <div className="w-1/2">
        <img
          src="data:image/jpeg;base64,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"
          alt=""
          className="h-2/6 w-full rounded-2xl "
        />

        <br />
        <img
          src="data:image/jpeg;base64,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"
          alt=""
          className="h-2/6 w-full rounded-2xl"
        />
      </div>
    </div>
  );
}

export default Hero1;
