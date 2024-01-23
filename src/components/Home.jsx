import React from "react";
import Hero1 from "./Homepage/Hero1";
import Phoneprice from "./Homepage/Phoneprice";
import ShopbyBrand from "./Homepage/ShopbyBrand";
import ShopbyCategory from "./Homepage/ShopbyCategory";
import SmartBuy from "./Homepage/SmartBuy"

const Home = () => {
  return (
    <>
      <Hero1 />
      <Phoneprice />
      <ShopbyBrand />
      <ShopbyCategory />
      <SmartBuy/>
    </>
  );
};

export default Home;
