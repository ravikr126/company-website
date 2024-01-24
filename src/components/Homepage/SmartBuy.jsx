import React from "react";
import FlipCountdown from "@rumess/react-flip-countdown";

const SmartBuy = () => {
  const data = [
    {
      title: "Start your current phones",
      imageUrl: "../assets/HomeImages/404.png",
      contains:
        "Welcome to Mobile Genie. Buckle up for Savings Galore. The mobile ride is about to start, and your mobile wishes may really come true",
    },
    {
      title: "Recommendation for You",
      imageUrl: "../assets/HomeImages/compaing.png",
      contains: "Recommended for family and friends",
      specialcontains: "Buy More Save More",
    },
    {
      title: "Get an instant offer",
      imageUrl: "../assets/HomeImages/Buy.png",
      contains: "Unlock the hidden value for your mobile. Trade More Earn More",
    },
    {
      title: "Compare Phones",
      imageUrl: "../assets/HomeImages/Jiggling.png",
      contains:
        "Compare mobile phones instantly view side-by-side comparisons, market reviews",
    },
    // Add more data items as needed
  ];

  return (
    <div className="mb-5">
      <div className="bg-blue-300 font-bold p-4 sm:p-8 flex flex-col items-center justify-center">
        <p className="text-3xl sm:text-4xl font-serif">SMART BUY</p>
        <h1
          className="text-2xl sm:text-4xl mt-2"
          style={{
            background: "-webkit-linear-gradient(left, #3C0753, #3652AD)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Make your phone wish come true
        </h1>
      </div>

      {/* Responsive grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8 mx-4 sm:mx-8 lg:mx-10 my-5">
        {data.map((item, index) => (
          <div
            key={index}
            className="bg-gray-300 p-4 sm:p-8 rounded-md text-center"
          >
            <img src={item.imageUrl} alt={item.title} className="w-full mb-2" />
            <p className="font-bold text-lg sm:text-xl">{item.title}</p>
            <p className="text-sm sm:text-base">{item.contains}</p>
            <p className="font-bold text-sm sm:text-base">
              {item.specialcontains}
            </p>
          </div>
        ))}
      </div>

      {/* grid complete */}

      {/* flagsale coming start */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mx-5 md:mx-10 h-[400px] my-5">
        <div
          className="text-center bg-cover md:h-full"
          style={{ background: "linear-gradient(to bottom, white, pink)" }}
        >
          <p className="font-bold text-4xl md:text-5xl">FLASH SALE</p>
          <p className="bg-purple-500 text-white mx-5 md:mx-20 my-3 md:my-0">
            UP TO 70% OFF
          </p>

          {/* flipclock start */}
          <div className="flex items-center justify-center mt-5">
            <div className="font-bold text-white text-center">
              <div className="text-[#8486A9]">
                <FlipCountdown
                  hideYear
                  hideMonth
                  theme="dark"
                  size="medium"
                  titlePosition="bottom"
                  endAt={new Date(
                    Date.now() +
                      1000 /* sec */ *
                        60 /* min */ *
                        60 /* hour */ *
                        48 /* day */ *
                        30 /* month */ *
                        12 /* year */ *
                        2
                  ).toUTCString()}
                />
              </div>
            </div>
          </div>
          {/* flipclock ends */}

          <div className="text-left md:flex md:justify-between">
            <div className="mx-5 md:mx-16 mt-3 md:mt-0 md:w-1/2">
              <p className="mb-3 font-bold text-xl md:text-2xl">
                IPHONE 15 PRO
              </p>
              <button className="bg-orange-900 text-white px-6 py-2 rounded-md">
                Shop Now
              </button>
            </div>

            <img
              className="hidden md:block"
              src="../assets/HomeImages/404.png"
              alt="apple"
            />
          </div>
        </div>
        {/* flagsale coming end */}

        {/* mobile app version start */}
        <div
          className="text-center px-5 bg-cover mt-5 md:mt-20 h-[400px]"
          style={{ background: "linear-gradient(to bottom, white, blue)" }}
        >
          <div className="text-left">
            <p className="text-[#96E9C6] text-base font-semibold mb-5">
              MOBILE APP VERSION
            </p>
            <p className="text-xl md:text-2xl">
              Get Our{" "}
              <span className="text-[#83C0C1] font-bold"> Mobile App</span> it's
              Make Easy for your life !
            </p>
            {/* Add your images here with appropriate classes for responsiveness
      <img className="w-32 h-32 mx-auto mt-3 md:w-48 md:h-48" src="" alt="" />
      <img className="w-32 h-32 mx-auto mt-3 md:w-48 md:h-48" src="" alt="" /> */}

            <p className="font-bold text-2xl mb-1">Join Membership</p>
            <button className="w-full md:w-3/4 py-2 rounded-xl mb-2 bg-gray-300 hover:bg-slate-500">
              Prime Membership
            </button>
            <button className="w-full md:w-3/4 py-2 rounded-xl  bg-yellow-200 hover:bg-yellow-500">
              Supreme Membership
            </button>
          </div>
        </div>
      </div>
      {/* flagsale coming end */}
    </div>
  );
};

export default SmartBuy;
