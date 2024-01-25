import React from "react";
import Hero1 from "./Homepage/Hero1";
import Phoneprice from "./Homepage/Phoneprice";
import ShopbyBrand from "./Homepage/ShopbyBrand";
import ShopbyCategory from "./Homepage/ShopbyCategory";
import SmartBuy from "./Homepage/SmartBuy"
import ProductCat from "./Homepage/ProductCat";
import Offers from "./Homepage/Offers";

const Home = () => {
  return (
    <>
      <Hero1 />
      <Phoneprice />
      <ShopbyBrand />
      <ShopbyCategory />
      <SmartBuy/>
      <ProductCat/>
      <Offers/>
    </>
  );
};

export default Home;
