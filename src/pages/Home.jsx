import React from "react";
import Banner from "../components/Banner";
import WideRangeFeature from "../components/WideRangeFeature";
import Futures from "../components/Futures";
import ExplorProducts from "../components/ExplorProducts";
import Enquiry from "../components/Enquiry";
import OurServices from "../components/OurServices";

const Home = () => {
  return (
    <div className="bg-[linear-gradient(to_bottom,#044031,#1E1925)]">
      <Banner />
      <WideRangeFeature />
      <Futures />
      <ExplorProducts />
      <Enquiry />
      <OurServices />
    </div>
  );
};

export default Home;
