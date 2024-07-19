/** @format */

import React from "react";
import BagSummary from "../components/BagSummary";
import BagItem from "../components/BagItem";

const Bag = () => {
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
    <>
      <main>
        <div className="bag-page">
          <div className="bag-items-container"><BagItem item={item}/></div>
          <BagSummary />
        </div>
      </main>
    </>
  );
};

export default Bag;
