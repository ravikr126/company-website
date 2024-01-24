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
    <>
      <div className="bg-blue-300 font-bold p-8 flex justify-between">
        <p className="text-6xl font-serif">SMART BUY</p>
        <h1
          className="text-4xl "
          style={{
            background: "-webkit-linear-gradient(left, #3C0753, #3652AD)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Make your phone wish come true
        </h1>
      </div>

      {/* grid */}
      <div className="grid grid-cols-4 gap-8 mx-10 my-5">
        {data.map((item, index) => (
          <div
            key={index}
            className="bg-gray-300 p-8 rounded-[30px]  text-center"
          >
            {/* Render your content for each item here */}
            <img src={item.imageUrl} alt={item.title} />
            <p className="font-bold text-xl ">{item.title}</p>
            <p>{item.contains}</p>
            <p className="font-bold">{item.specialcontains}</p>
          </div>
        ))}
      </div>

      {/* grid complete */}

      {/* flagsale coming start */}
      <div className="grid grid-cols-2 gap-8 mx-10 h-[400px] my-5">
        <div
          className="text-center bg-cover"
          style={{ background: "linear-gradient(to bottom, white, pink)" }}
        >
          <p className="font-bold text-5xl">FLASH SALE</p>
          <p className="bg-purple-500 text-white mx-20">UP TO 70% OFF</p>
          {/* flipclock start */}
          <div className="flex mt-5 text-center">
            <div className="font-bold text-white text-center">
              <div className="text-[#8486A9]">
                <FlipCountdown
                  hideYear
                  hideMonth
                  theme="dark"
                  size="small"
                  titlePosition="bottom"
                  text="center"
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
          <div className="text-left flex justify-between">
            <p>IPHONE 15 PRO</p>
            <button className="bg-orange-900 text-white px-10 py-2 rounded-2xl">
              Shop Now
            </button>
            <img src="../assets/HomeImages/apple.png" alt="apple" />
          </div>
        </div>
      </div>
      {/* flagsale coing end */}

      {/* mobile app version start */}

      {/* mobile app version start */}

      <div></div>
    </>
  );
};

export default SmartBuy;
