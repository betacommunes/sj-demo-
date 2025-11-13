import React from "react";
import AboutBanner from "../../assets/AboutBanner.jpg";

const Banner = () => {
  return (
    <div className="relative md:h-screen h-[70vh] w-full">
      {/* Background image */}
      <img
        src={AboutBanner}
        alt="Golden Roots About Banner"
        className="absolute inset-0 w-full h-full object-left md:object-center object-cover brightness-[35%]"
      />

      {/* Centered content */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center space-y-6 md:p-8 px-4 w-full md:max-w-2xl mt-20">
          <h1 className="text-[#C9A54A] md:text-5xl text-3xl font-bold">
            About Golden Roots
          </h1>
          <p className="text-white md:text-lg text-sm leading-relaxed">
            At Golden Roots, we bring you the finest natural products crafted 
            with love and tradition. From authentic desi ghee to premium dry 
            fruits, every product is carefully selected to ensure purity, 
            quality, and health for your family. Our mission is to make natural 
            goodness a part of your everyday life, delivered fresh and safely 
            to your doorstep.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
