import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { motion } from "framer-motion";
import { FaLeaf, FaTruckFast, FaStar } from "react-icons/fa6";

const saleProducts = [
  {
    id: 1,
    name: "Desi Ghee Jar",
    image: "https://thalnaturals.com/cdn/shop/files/cow.jpg?v=1745580407",
    saleEnd: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
  },
  {
    id: 2,
    name: "Dry Fruits Bowl",
    image: "https://thalnaturals.com/cdn/shop/files/Best_Nuts_Front.jpg?v=1741853783",
    saleEnd: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000),
  },
];

const FlashSale = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const auto = setInterval(() => {
      setCurrentIndex((prev) =>
        prev === saleProducts.length - 1 ? 0 : prev + 1
      );
    }, 5000);
    return () => clearInterval(auto);
  }, []);

  const next = () =>
    setCurrentIndex((prev) =>
      prev === saleProducts.length - 1 ? 0 : prev + 1
    );
  const prev = () =>
    setCurrentIndex((prev) =>
      prev === 0 ? saleProducts.length - 1 : prev - 1
    );

  const current = saleProducts[currentIndex];

  return (
    <div className="w-full bg-gradient-to-b from-[#fff8f0] to-white py-16 px-6 md:px-20 flex flex-col lg:flex-row items-center justify-between gap-10 overflow-hidden">

      {/* LEFT MODERN SECTION */}
      <motion.div
        initial={{ x: -40, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
        className="lg:w-1/2 w-full text-center lg:text-left space-y-8 flex flex-col items-center lg:items-start"
      >
        {/* Gradient Badge */}
        <div className="bg-gradient-to-r from-secondary to-primary text-white px-6 py-2 rounded-full text-sm font-semibold shadow-md">
          Deal of the Week 🌿
        </div>

        {/* Headline */}
        <h2 className="text-5xl font-extrabold leading-tight text-gray-900">
          Elevate Your <span className="text-secondary">Natural Living</span>
        </h2>

        {/* Sub Text */}
        <p className="text-gray-600 text-lg max-w-md mx-auto lg:mx-0">
          Taste the purity of nature. Discover handcrafted, chemical-free products made with love & tradition.
        </p>

        {/* Feature Icons */}
        <div className="flex justify-center lg:justify-start gap-6 mt-4 text-primary">
          <div className="flex flex-col items-center text-center">
            <FaLeaf size={28} />
            <span className="text-sm text-gray-600 mt-1">100% Natural</span>
          </div>
          <div className="flex flex-col items-center text-center">
            <FaTruckFast size={28} />
            <span className="text-sm text-gray-600 mt-1">Free Delivery</span>
          </div>
          <div className="flex flex-col items-center text-center">
            <FaStar size={28} />
            <span className="text-sm text-gray-600 mt-1">Pure Taste</span>
          </div>
        </div>

        {/* CTA Button */}
        <Link to="/product">
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="relative mt-8 px-10 py-3 rounded-full font-semibold text-white bg-gradient-to-r from-primary to-secondary shadow-lg overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-2">
              Explore Products <FaArrowRight />
            </span>
            <span className="absolute inset-0 bg-white/10 hover:bg-white/20 transition-all"></span>
          </motion.button>
        </Link>
      </motion.div>

      {/* RIGHT IMAGE SLIDER */}
      <motion.div
        initial={{ x: 40, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
        className="lg:w-1/2 w-full relative"
      >
        <div className="relative h-[65vh] rounded-2xl overflow-hidden shadow-xl">
          {saleProducts.map((p, i) => (
            <motion.img
              key={p.id}
              src={p.image}
              alt={p.name}
              className="absolute w-full h-full object-cover rounded-2xl"
              animate={{
                opacity: i === currentIndex ? 1 : 0,
                scale: i === currentIndex ? 1 : 1.05,
              }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            />
          ))}

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

          {/* Caption */}
          <motion.div
            key={current.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="absolute bottom-6 left-0 w-full text-center text-white font-semibold text-lg bg-black/40 py-2 backdrop-blur-sm"
          >
            {current.name}
          </motion.div>

          {/* Controls */}
          <button
            onClick={prev}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-primary p-2 rounded-full shadow-md"
          >
            <MdKeyboardArrowLeft size={26} />
          </button>
          <button
            onClick={next}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-primary p-2 rounded-full shadow-md"
          >
            <MdKeyboardArrowRight size={26} />
          </button>

          {/* Dots */}
          <div className="absolute bottom-3 w-full flex justify-center gap-2">
            {saleProducts.map((_, i) => (
              <div
                key={i}
                className={`w-3 h-3 rounded-full ${
                  i === currentIndex ? "bg-secondary scale-110" : "bg-white/60"
                } transition-all duration-300`}
              />
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default FlashSale;
