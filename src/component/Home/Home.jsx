import React from "react";
import FlashSale from "./FlashSale";
import DealsOfTheDay from "./DealsOfTheDay";
import Testimonial from "./Testimonial";
import SocialGallery from "./SocialGallery";
import Product from "../Product/Product";
import Hero from "./Hero";

const Home = () => {
  return (
    <div className=" mt-16">
      <Hero />
      <FlashSale />
      <Product/>
      <DealsOfTheDay />
      <Testimonial />
      <SocialGallery />
    </div>
  );
};

export default Home;
