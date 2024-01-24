import React, { useState, useEffect } from "react";

const SmartBuy = () => {
  const data = [
    {
      title: "Start your current phones",
      imageUrl: "../assets/HomeImages/404.png",
      contains:
        "Welcome to Mobile Genie. Buckle ip for Savings Galore. The mobile ride is about to start, and your mobilw wishes may really come true ",
    },
    {
      title: "Recommandation for You ",
      imageUrl: "../assets/HomeImages/compaing.png",
      contains: "Recommended for family and friends",
      specialcontains: "Buy More Save More",
    },
    {
      title: "Get an instant offer",
      imageUrl: "../assets/HomeImages/Buy.png",
      contains: "Unlock the hidden value for your mobile.Trade More Earn More",
    },
    {
      title: "Compare Phones",
      imageUrl: "../assets/HomeImages/Jiggling.png",
      contains:
        "Compare moble phones instantly view side-by-side comparisons, market reviews",
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
      <div className="grid grid-cols-4 gap-8 mx-10 my-5 ">
        {data.map((item, index) => (
          <div
            key={index}
            className="bg-gray-300 p-8 rounded-[30px]  text-center"
          >
            {/* Render your content for each item here */}
            <img src={item.imageUrl} alt={item.title} />
            <p className="font-bold text-xl ">{item.title}</p>
            <p className="">{item.contains}</p>
            <p className="font-bold">{item.specialcontains}</p>
          </div>
        ))}
      </div>

      {/* grid complete */}

      {/* flagsale coming start */}
      <div className="grid grid-cols-2 gap-8 mx-10 h-[400px] my-5">
        <div
          className="text-center bg-cover "
          style={{ background: "linear-gradient(to bottom, white, pink)" }}
        >
          <p className="font-bold text-5xl">FLASH SALE</p>
          <p className="bg-purple-500 text-white mx-20">UP TO 70% OFF</p>
        </div>
      </div>

      {/* flagsale coing end */}
    </>
  );
};

export default SmartBuy;
