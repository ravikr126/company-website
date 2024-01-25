import React from "react";
import { CiMail } from "react-icons/ci";

const Offers = () => {
  return (
    <>
      <div
        style={{ background: "linear-gradient(to bottom, #C5FFF8, white)" }}
        className="text-center p-8 h-[300px]"
      >
        <h1 className="text-4xl font-bold">Get our Latest offer</h1>
        <p className="text-2xl mb-8">By subscription</p>

        <div className="flex justify-center items-center">
          <div className="w-1/2 flex items-center text-xl p-4 relative">
            <input
              type="search"
              placeholder="EMAIL ADDRESS"
              className="pl-16 p-4 rounded-xl border border-gray-300 flex-grow"
            />
            <button className="p-4 font-bold bg-[#7BD3EA] rounded-r-xl absolute right-4">
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
