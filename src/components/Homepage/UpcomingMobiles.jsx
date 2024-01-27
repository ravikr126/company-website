import React from "react";

const UpcomingMobiles = () => {
  return (
    <>
      <div className="p-10">
        <p className="text-4xl font-bold">Upcoming Mobiles</p>
        {/* images */}

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
                className="bg-[#FFA732] text-white font-bold px-8 py-2 rounded mt-5"
                onClick={nextSlide}
              >
                Shop Now
              </button>
            </div>
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

            <div className="hidden md:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
              <BsChevronCompactRight onClick={nextSlide} size={30} />
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
                <p className="text-3xl text-[#756AB6] font-bold mb-4">
                  iPhone 15
                </p>
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
                <p className="text-3xl text-[#756AB6] font-bold mb-4">
                  Pixel 7a
                </p>
                <button className="font-bold py-2 px-4 bg-[#FFA732] rounded-xl">
                  Shop Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UpcomingMobiles;
