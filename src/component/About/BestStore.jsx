import React from "react";


const BestStore = () => {
  const data_store = [
    {
      id: 1,
      title: "Authentic Organic Ghee",
      description:
        "Pure desi ghee crafted traditionally, ensuring rich flavor and natural goodness for your daily meals.",
      image: "https://thalnaturals.com/cdn/shop/files/cow.jpg?v=1745580407",
    },
    {
      id: 2,
      title: "Premium Dry Fruits",
      description:
        "Handpicked, fresh, and nutrient-rich dry fruits to bring health and taste directly from nature to your home.",
      image:"https://thalnaturals.com/cdn/shop/files/Best_Nuts_Front.jpg?v=1741853783",
    },
    {
      id: 3,
      title: "Safe & Fast Delivery",
      description:
        "All products are carefully packed and delivered quickly, ensuring freshness and quality at your doorstep.",
      image:   "https://thalnaturals.com/cdn/shop/files/Best_Nuts_Honey_1.jpg?v=1737647523&width=375",
    },
  ];

  return (
    <section className="mt-10 md:mt-20 px-4 md:px-20 text-center space-y-10">
      <h1 className="text-gray-800 font-bold md:text-4xl text-2xl">
        The <span className="text-[#C9A54A]">Best Natural</span> Products
      </h1>

      <div className="flex justify-center w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-10">
          {data_store.map((item) => (
            <div key={item.id} className="w-full max-w-md gap-5 md:mt-10">
              {/* Image */}
              <div className="overflow-hidden rounded-xl shadow-lg">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-72 w-full object-cover transition-transform duration-700 ease-in-out hover:scale-110"
                />
              </div>

              {/* Text Content */}
              <div className="my-5 space-y-2 text-left">
                <p className="font-bold text-[#C9A54A] md:text-2xl text-xl">
                  {item.title}
                </p>
                <p className="text-gray-700">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BestStore;
