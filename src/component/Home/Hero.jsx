import React, { useState } from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Hero() {
  const [current, setCurrent] = useState(0);

  const slides = [
    {
      id: 1,
      title: "Pure Desi Goodness",
      subtitle: "Organic • Healthy • Authentic",
      description:
        "From Desi Ghee to premium dry fruits, taste the purity of 100% natural products made with love and tradition.",
      img: "https://thalnaturals.com/cdn/shop/files/cow.jpg?v=1745580407",
    },
    {
      id: 2,
      title: "Wholesome Natural Products",
      subtitle: "Nature’s Touch in Every Bite",
      description:
        "Experience the freshness of dry fruits, honey, and organic herbs — straight from farmers to your home.",
      img: "https://thalnaturals.com/cdn/shop/files/Best_Nuts_Front.jpg?v=1741853783",
    },
  ];

  const nextSlide = () => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };
  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <section className="relative overflow-hidden flex justify-center items-center bg-gradient-to-r from-primary/20 to-secondary/10 h-[85vh] w-full">

      {/* Decorative Circle */}
      <div className="absolute right-[-150px] top-[-150px] w-[450px] h-[450px] rounded-full bg-primary/10 blur-3xl"></div>

      {/* Slide Content */}
      <motion.div
        key={slides[current].id}
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-20 flex flex-col md:flex-row items-center justify-between w-full max-w-7xl px-6 md:px-14"
      >
        {/* TEXT SECTION */}
        <div className="md:w-1/2 space-y-5 text-center md:text-left">
        
          <h2 className="text-secondary font-medium tracking-[5px] uppercase text-sm">
            {slides[current].subtitle}
          </h2>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold text-primary leading-tight"
          >
            {slides[current].title}
          </motion.h1>

          <p className="text-gray-700 max-w-lg text-sm md:text-base">
            {slides[current].description}
          </p>

          <div className="flex justify-center md:justify-start">
            <Link to="/shop">
              <button className="bg-primary hover:bg-secondary text-white px-6 py-3 rounded-full flex items-center gap-2 mt-3 font-medium transition-all">
                Shop Now <FaArrowRight />
              </button>
            </Link>
          </div>
        </div>

        {/* IMAGE SECTION */}
        <motion.div
          className="md:w-1/2 flex justify-center"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <img
            src={slides[current].img}
            alt="hero"
            className="w-[350px] md:w-[450px] drop-shadow-xl rounded-2xl object-cover"
          />
        </motion.div>
      </motion.div>

      {/* Slide Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-5 top-1/2 -translate-y-1/2 z-40 p-2 rounded-full bg-secondary text-white hover:bg-primary transition-all"
      >
        <MdKeyboardArrowLeft size={25} />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-5 top-1/2 -translate-y-1/2 z-40 p-2 rounded-full bg-secondary text-white hover:bg-primary transition-all"
      >
        <MdKeyboardArrowRight size={25} />
      </button>

      {/* Border Frame */}
      <div className="absolute inset-5 border border-secondary/20 rounded-2xl pointer-events-none"></div>
    </section>
  );
}
