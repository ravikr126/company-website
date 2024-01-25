import React from "react";
import { CiMail } from "react-icons/ci";

const Offers = () => {
  return (
    <>
      <div
        style={{ background: "linear-gradient(to bottom, blue, white)" }}
        className="text-center p-5"
      >
        <h1 className="text-2xl font-bold">Get our Latest offer</h1>
        <p>By subscription</p>

        <div className="flex justify-center items-center">
          <div className="w-1/2 flex items-center text-xl p-4 relative">
            <input
              type="search"
              placeholder="EMAIL ADDRESS"
              className="pl-16 p-4 rounded-xl border border-gray-300 flex-grow"
            />
            <button className="p-4 bg-[#93C5F3] rounded-r-xl absolute right-4">
              Get the Coupons
            </button>
            <CiMail
              className="text-5xl absolute left-4 ml-3"
              style={{ top: "50%", transform: "translateY(-50%)" }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Offers;
