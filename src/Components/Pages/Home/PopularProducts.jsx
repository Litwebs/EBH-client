import React from "react";
import "./PopularProducts.css";
import pic1 from "../../../Images/new/mp-1.jpeg";
import pic2 from "../../../Images/new/mp-2.jpeg";
import pic3 from "../../../Images/new/mp-3.jpeg";
import pic4 from "../../../Images/new/mp-4.jpeg";
import pic5 from "../../../Images/new/mp-5.jpeg";
import pic6 from "../../../Images/new/mp-6.jpeg";

const products = [
  { name: "Bloom and Bubbles", price: "£30", image: pic1 },
  { name: "Luxury Neutral Bouquet", price: "£30", image: pic2 },
  { name: "Spring Bouquet", price: "£30", image: pic3 },
  { name: "Pastel Hatbox", price: "£30", image: pic4 },
  { name: "Personalised Balloons", price: "£30", image: pic5 },
  { name: "Rose in Balloon", price: "£30", image: pic6 },
];

const PopularProducts = () => {
  return (
    <div className="pp-container">
      <h2 className="pp-title">Most Popular Products</h2>
      <div className="pp-grid">
        {products.map((product, index) => (
          <div className="pp-card" key={index}>
            <img src={product.image} alt={product.name} className="pp-image" />
            {/* <div className="pp-info">
              <p className="pp-name">{product.name}</p>
            </div> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularProducts;
