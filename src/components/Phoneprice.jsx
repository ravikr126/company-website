import React from "react";

const Phoneprice = () => {
  return (
    <>
      <div className="rounded-xl mx-5 h-96 p-5 bg-[url('https://images.pexels.com/photos/3006340/pexels-photo-3006340.jpeg?auto=compress&cs=tinysrgb&w=600')]">
        <p className="text-white text-4xl font-bold">Phone Prices</p>

        <div className="drop-shadow-xl p-5 mt-8 border rounded-xl h-[250px] w-1/2 bg-[url('https://images.pexels.com/photos/531767/pexels-photo-531767.jpeg?auto=compress&cs=tinysrgb&w=600')]">
          <p className="text-3xl font-bold text-white mb-2" >Search for a Phone</p>
          <p className="text-base font-bold text-white">
            Select a year , Brands and models to see what you cann expect to pay
            for it this week.
          </p>
        </div>
      </div>
    </>
  );
};

export default Phoneprice;
