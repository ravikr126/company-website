import { FaArrowRight } from "react-icons/fa";
import React, { useEffect, useState } from "react";
import axios from "axios";

const ProductCat = () => {
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

    // Add more data items as needed
  ];
  return (
    <div className="p-10 bg-slate-500">
      <div className="flex justify-between font-bold">
        <h1 className="text-2xl">Popular Category</h1>
        <a
          href="#"
          style={{
            display: "flex",
            alignItems: "center",
            textDecoration: "none",
          }}
          className="space-between"
        >
          View More <FaArrowRight className="ml-2" />
        </a>
      </div>

      {/* Responsive grid */}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8 mx-4 sm:mx-8 lg:mx-10 my-5">
        <div className="bg-[#A94438] p-4 sm:p-8 rounded-md ">
          <p className="text-3xl p-4">Popular Category</p>

          <p className="px-4">Keypad mobiles</p>
          <p className="px-4">Android Mobiles</p>
        </div>
        {data.map((item, index) => (
          <div
            key={index}
            className="bg-gray-300 p-4 sm:p-8 rounded-md text-center"
          >
            <img src={item.imageUrl} alt={item.title} />
            <p className="font-bold text-lg sm:text-xl">{item.title}</p>
            <p className="text-sm sm:text-base">{item.contains}</p>
            <p className="font-bold text-sm sm:text-base">
              {item.specialcontains}
            </p>
          </div>
        ))}
      </div>

      {/* grid complete */}
    </div>
  );
};

export default ProductCat;
