import React from "react";
import "./Categories.css";

// Ensure images are correctly referenced from the `public` folder
const categories = [
    { id: 1, name: "Paintings", img: "/photos/painting.jpg", desc: "Beautiful artwork" },
    { id: 2, name: "Sneakers", img: "/photos/shoes.jpg", desc: "Rare sneaker collection" },
    { id: 3, name: "Watches", img: "/photos/watch.jpg", desc: "Luxury timepieces" },
    { id: 4, name: "Jewelry", img: "/photos/jewelry.jpg", desc: "Elegant and rare pieces" },
    { id: 5, name: "Antiques", img: "/photos/antiques.jpg", desc: "Historic collectibles" }
  ];
  
  

const Categories = () => {
  return (
    <div className="categories-container">
      {categories.map((item) => (
        <div key={item.id} className="category-card">
          <img src={item.img} alt={item.name} className="category-image" />
          <h3>{item.name}</h3>
          <p>{item.desc}</p>
        </div>
      ))}
    </div>
  );
};

export default Categories;
