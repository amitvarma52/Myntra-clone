/** @format */

import React from "react";
import HomeItem from "../components/HomeItem";

const Home = () => {
  const item = {
    id: "005",
    image: "images/5.jpg", // 1st by default it will search in public folder
    company: "Roadster",
    item_name: "Pure Cotton T-shirt",
    original_price: 1399,
    current_price: 489,
    discount_percentage: 65,
    return_period: 14,
    delivery_date: "10 Oct 2023",
    rating: {
      stars: 4.2,
      count: 3500,
    },
  };
  return (
    <main>
      <div className="items-container">
        <HomeItem item={item} />
      </div>
    </main>
  );
};

export default Home;
