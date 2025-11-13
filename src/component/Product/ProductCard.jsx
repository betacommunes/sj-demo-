import React from "react";
import { Link } from "react-router-dom";
import ReactStars from "react-rating-stars-component";
import { motion } from "framer-motion";

const ProductCard = ({ products, filter = "all" }) => {
  // ✅ Filter products
  const filteredProducts =
    filter === "all"
      ? products
      : products.filter(
          (p) => p.category?.toLowerCase() === filter.toLowerCase()
        );

  // ✅ Short description
  const getShortText = (text, max = 100) => {
    if (!text) return "No description available.";
    return text.length > max ? text.slice(0, max) + "..." : text;
  };

  // ✅ Random reviews count
  const getReviews = () => Math.floor(Math.random() * 300) + 50;

  // ✅ Format price
  const formatPrice = (price) => `PKR ${price.toLocaleString()}`;

  return (
    <section className="md:px-20 px-4 py-12 w-full">
      <h2 className="text-3xl font-bold mb-10 text-center text-secondary capitalize">
        {filter === "all" ? "Our Natural Products" : `${filter} Collection`}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((item) => {
            const randomRating = Math.floor(Math.random() * 2) + 4; // ⭐ 4 or 5 stars
            const discountedPrice = item.new_price * 1.4;

            return (
              <motion.article
                key={item.id}
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="flex flex-col rounded-3xl overflow-hidden bg-white shadow-lg border border-gray-100 group"
              >
                <Link
                  to={`/product/${item.id}`}
                  state={{ product: item }}
                  className="h-full flex flex-col"
                >
                  {/* IMAGE */}
                  <figure className="relative overflow-hidden bg-gray-50 flex justify-center items-center">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-64 object-contain transition duration-700 group-hover:scale-110"
                      loading="lazy"
                    />
                    <span className="absolute top-3 left-3 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md bg-gradient-to-r from-primary to-secondary">
                      40% OFF
                    </span>
                  </figure>

                  {/* CONTENT */}
                  <div className="p-5 flex flex-col flex-grow">
                    <h3 className="text-xl font-semibold text-gray-900 line-clamp-1 mb-1">
                      {item.name}
                    </h3>

                    <p className="text-gray-600 text-sm line-clamp-2 mb-3">
                      {getShortText(item.description, 120)}
                    </p>

                    {/* PRICE */}
                    <div className="mt-2 flex items-center gap-3">
                      <span className="text-2xl font-bold text-gray-900">
                        {formatPrice(item.new_price)}
                      </span>
                      <span className="line-through text-gray-400 text-sm">
                        {formatPrice(discountedPrice.toFixed(0))}
                      </span>
                    </div>

                    {/* RATING */}
                    <div className="mt-3 flex items-center gap-2">
                      <ReactStars
                        count={5}
                        size={20}
                        value={randomRating}
                        edit={false}
                        char="★"
                        color="#e5e7eb"
                        activeColor="#ffb200"
                      />
                      <span className="text-sm text-gray-500">
                        ({getReviews()} reviews)
                      </span>
                    </div>

                    {/* VIEW PRODUCT BUTTON */}
                    <Link
                      to={`/product/${item.id}`}
                      state={{ product: item }}
                      className="mt-4 inline-block text-center bg-gradient-to-r from-primary to-secondary text-white font-semibold px-6 py-2 rounded-full shadow-lg hover:scale-105 transition-transform"
                    >
                      View Product
                    </Link>
                  </div>
                </Link>
              </motion.article>
            );
          })
        ) : (
          <p className="col-span-full text-center text-gray-500 text-lg">
            No products found
          </p>
        )}
      </div>
    </section>
  );
};

export default ProductCard;
