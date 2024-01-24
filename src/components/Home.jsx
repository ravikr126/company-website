import React from "react";
import Hero1 from "./Homepage/Hero1";
import Phoneprice from "./Homepage/Phoneprice";
import ShopbyBrand from "./Homepage/ShopbyBrand";
import ShopbyCategory from "./Homepage/ShopbyCategory";
import SmartBuy from "./Homepage/SmartBuy"
import ProductCat from "./Homepage/ProductCat";

const Home = () => {
  return (
    <>
      <Hero1 />
      <Phoneprice />
      <ShopbyBrand />
      <ShopbyCategory />
      <SmartBuy/>
      <ProductCat/>
    </>
  );
};

export default Home;
