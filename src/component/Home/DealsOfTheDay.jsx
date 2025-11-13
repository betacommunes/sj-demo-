import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
import ReactStars from "react-rating-stars-component";
import productData from "../../assets/productData";

const DealsOfTheDay = () => {
  const discountedProducts = productData.filter(
    (product) => product.discount && product.onSale
  );

  return (
    <section className="md:mx-20 mx-3 py-14">
      {/* ===== Heading ===== */}
      <div className="text-center mb-10">
        <span className="text-sm font-medium tracking-wide text-gray-500">
          Today Deals
        </span>
        <h2 className="text-4xl font-bold text-gray-900 mt-2 uppercase">
          Deals <span className="text-secondary">of the Day</span>
        </h2>
        <p className="text-gray-500 max-w-xl mx-auto mt-3">
          Trending premium products with exclusive deals — grab yours before the offer ends!
        </p>
      </div>

      {/* ===== Product deals ===== */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {discountedProducts.map((product) => (
          <div
            key={product.id}
            className="flex gap-5 bg-white/80 backdrop-blur-lg rounded-3xl overflow-hidden shadow-xl border border-gray-200 hover:shadow-2xl transition-all duration-300 hover:scale-[1.01] md:h-[40vh]"
          >
            {/* Product Image */}
            <div className="relative w-1/2">
              <span className="absolute top-3 left-3 bg-secondary text-white text-xs px-3 py-1 rounded-full font-semibold shadow-md">
                {product.discount}
              </span>

              <img
                src={product.image}
                alt={product.name}
                className="object-cover w-full h-full rounded-l-3xl"
              />
            </div>

            {/* Product Details */}
            <div className="w-1/2 px-4 py-6 flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  {product.name}
                </h3>

                <div className="flex items-center gap-3 mt-2">
                  <span className="text-xl font-bold text-gray-900">
                    ${product.new_price.toFixed(2)}
                  </span>
                  <span className="line-through text-gray-400 text-sm">
                    ${product.old_price.toFixed(2)}
                  </span>
                </div>

                <div className="flex items-center mt-2">
                  <ReactStars
                    count={5}
                    size={20}
                    value={product.ratingValue}
                    edit={false}
                    char="★"
                    color="#e5e7eb"
                    activeColor="#fbbf24"
                  />
                </div>

                <p className="text-xs text-gray-500 mt-3 leading-relaxed">
                  {product.description}
                </p>
              </div>

              <Link to="/product">
                <button className="text-secondary font-semibold flex items-center gap-2 hover:gap-3 transition-all duration-300">
                  Shop Now <FaArrowRight />
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DealsOfTheDay;
