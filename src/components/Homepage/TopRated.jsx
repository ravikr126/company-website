import { FaArrowRight } from "react-icons/fa";
import React, { useEffect, useState } from "react";
import axios from "axios";

const TopRated = () => {
  return (
    <>
      <div className="p-10 bg-[#DCF2F1]">
        <div className="flex justify-between font-bold">
          <h1 className="text-4xl">Top Rated Product</h1>
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

        {/* //api adding */}
      </div>
    </>
  );
};

export default TopRated;
