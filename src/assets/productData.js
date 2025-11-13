

// const productData = [{
//         id: 1,
//         name: "Recliner Chair Wood",
//         description: "High comfort recliner chair with wood finish.",
//         ratingValue: 5.0,
//         category: "latestProduct",
//         image: p1_img,
//         new_price: 105.0,
//         old_price: 150.0,
//         onSale: true,
//         discount: "30% off",
//         dealOfTheDay: true,
//         saleStart: "2025-07-07T00:00:00",
//         saleEnd: "2025-07-12T23:59:59",
//     },
//     {
//         id: 2,
//         name: "Recliner Chair Steel",
//         description: "Modern steel-framed recliner chair with comfort padding.",
//         ratingValue: 4.9,
//         category: "bestSeller",
//         image: p2_img,
//         new_price: 80.0,
//         old_price: 100.0,
//         onSale: false,
//         discount: null,
//     },
//     {
//         id: 3,
//         name: "Gaming Chair Pro",
//         description: "Ergonomic gaming chair with adjustable lumbar support.",
//         ratingValue: 4.5,
//         category: "featuredProduct",
//         image: p3_img,
//         new_price: 130.0,
//         old_price: 160.0,
//         onSale: true,
//         discount: "Flat 20% Discount",
//         dealOfTheDay: true,
//         saleStart: "2025-07-07T00:00:00",
//         saleEnd: "2025-07-12T23:59:59",
//     },
//     {
//         id: 4,
//         name: "Wood Chair Collection",
//         description: "Stylish wood chair set for modern living spaces.",
//         ratingValue: 4.7,
//         category: "latestProduct",
//         image: p4_img,
//         new_price: 85.0,
//         old_price: 100.0,
//         onSale: true,
//         discount: "Flat 15% Discount",
//         dealOfTheDay: true,
//         saleStart: "2025-07-07T00:00:00",
//         saleEnd: "2025-07-12T23:59:59",
//     },
//     {
//         id: 5,
//         name: "Classic Sofa",
//         description: "Elegant classic sofa for living room decor.",
//         ratingValue: 4.2,
//         category: "bestSeller",
//         image: p1_img,
//         new_price: 200.0,
//         old_price: 250.0,
//         onSale: false,
//         discount: null,
//         dealOfTheDay: false,
//     },
// ];
// productData.js
const productData = [
  {
    id: 1,
    name: "100% Pure Cow Desi Ghee",
    image:
      "https://thalnaturals.com/cdn/shop/files/cow.jpg?v=1745580407", // live image from Thal Naturals :contentReference[oaicite:1]{index=1}
    description:
      "High‑quality desi ghee crafted from fresh milk fermented overnight and churned the traditional way.",
    new_price: 1650, // PKR for 500g variant :contentReference[oaicite:2]{index=2}
    category: "desi ghee",
  },
  {
    id: 2,
    name: "100% Pure Acacia Honey",
    image:
      "https://thalnaturals.com/cdn/shop/files/Best_Nuts_Front.jpg?v=1741853783", // this URL originally for dry fruits, you may replace with honey image
    description:
      "Light golden acacia honey with mild floral taste, harvested naturally and unprocessed.",
    new_price: 1099, // PKR :contentReference[oaicite:3]{index=3}
    category: "honey",
  },
  {
    id: 3,
    name: "American Walnut Kernels (Dry Fruits)",
    image:
      "https://thalnaturals.com/cdn/shop/files/Best_Nuts_Honey_1.jpg?v=1737647523&width=375", // placeholder, you’ll need a proper URL from site
    description:
      "Premium walnut kernels selected for freshness and nutrition. Ideal snack and gift option.",
    new_price: 1850, // PKR :contentReference[oaicite:4]{index=4}
    category: "dry fruits",
  },
  {
    id: 4,
    name: "Persian Saffron – Super Negin",
    image:
      "https://thalnaturals.com/cdn/shop/files/charmagaz_b5aadd7e-049e-4a8e-b9bc-371da64c3862.jpg?v=1737647386&width=375", // placeholder
    description:
      "Top grade Persian saffron, hand‑picked and dried to retain aroma and colour. Known as the king of spices.",
    new_price: 2950, // PKR :contentReference[oaicite:5]{index=5}
    category: "spices & saffron",
  },
];

export default productData;
