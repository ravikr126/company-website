import React, { useState, useEffect } from "react";
import { BsChevronCompactRight } from "react-icons/bs";

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
    <div className="flex flex-col md:flex-row p-5 gap-10">
      {/* 1st slider */}
      <div className="md:w-1/2 w-full h-[400px] relative group overflow-hidden">
        <div
          style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
          className="w-full h-full rounded-2xl bg-center bg-cover duration-500"
        ></div>
        <div className="absolute top-0 left-0 md:top-4 md:left-4 p-4 text-[#756AB6]">
          <h2 className="text-base font-bold mb-2">Android</h2>
          <h1 className="text-4xl mb-3">OPPO</h1>
          <p className="text-4xl mb-4 hidden md:block font-bold">
            OPPO Reno 10
          </p>
          <p className="text-4xl mb-4 hidden md:block font-bold">Pro 5G</p>
          <p>The Portrait </p>
          <p>Expert</p>
          <button
            className="bg-[#FFA732] hover:bg-violet-500 text-white font-bold px-8 py-2 rounded mt-5 transition-colors duration-300"
            onClick={nextSlide}
          >
            Next Slide
          </button>
        </div>
        <div className="flex justify-end items-end w-full h-screen">
          <div className="absolute bottom-4 right-4 transform flex space-x-2">
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
      </div>

      {/* 2nd div */}
      <div className="md:w-1/2 w-full flex flex-col gap-2 relative">
        <div className="flex-grow h-[180px] relative">
          <img
            src="https://images.pexels.com/photos/56904/pexels-photo-56904.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
            className="w-full h-full rounded-2xl object-cover"
          />
          <div className="absolute top-3 left-0 p-4 text-white mx-5 ">
            <p className="">IOS</p>
            <p className="text-3xl text-[#756AB6] font-bold">Apple</p>
            <p className="text-3xl text-[#756AB6] font-bold mb-4">iPhone 15</p>
            <button className="font-bold py-2 px-4 bg-[#756AB6] rounded-xl">
              Shop Now
            </button>
          </div>
        </div>

        <div className="flex-grow h-[180px] relative">
          <img
            src="https://images.pexels.com/photos/56904/pexels-photo-56904.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
            className="w-full h-full rounded-2xl object-cover"
          />
          <div className="absolute top-3 left-0 p-4 text-white mx-5 ">
            <p className="">Android</p>
            <p className="text-3xl text-[#756AB6] font-bold">Google</p>
            <p className="text-3xl text-[#756AB6] font-bold mb-4">Pixel 7a</p>
            <button className="font-bold py-2 px-4 bg-[#FFA732] rounded-xl">
              Shop Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero1;
