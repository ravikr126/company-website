import React from "react";
import Hero1 from "./Homepage/Hero1";
import Phoneprice from "./Homepage/Phoneprice";
import ShopbyBrand from "./Homepage/ShopbyBrand";
import ShopbyCategory from "./Homepage/ShopbyCategory";
import SmartBuy from "./Homepage/SmartBuy";
import PopuCat from "./Homepage/PopuCat";
import Offers from "./Homepage/Offers";
import Footer from "./Homepage/Footer";
import BestPoduct from "./Homepage/BestPoduct";
import NewArrival from "./Homepage/NewArrival";
import TopRated from "./Homepage/TopRated";

const Home = () => {
  return (
    <>
      <Hero1 />
      <Phoneprice />
      <ShopbyBrand />
      <ShopbyCategory />
      <SmartBuy />
      <PopuCat />
      <TopRated/>
      <NewArrival/>
      <BestPoduct/>
      <Offers />
      <Footer />
    </>
  );
};

export default Home;
