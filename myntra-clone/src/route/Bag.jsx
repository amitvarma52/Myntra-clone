/** @format */

import React from "react";
import BagSummary from "../components/BagSummary";
import BagItem from "../components/BagItem";
import { useSelector } from "react-redux";

const Bag = () => {
  const bags = useSelector((state) => state.bags);
  const items = useSelector((state) => state.items);
  const finalItems = items.filter((element) => {
    return bags.includes(element.id);
  });
  const total = finalItems.reduce((a, element) => {
    return a + +element.current_price;
  }, 0);
  const Summary = {
    totalItem: finalItems.length,
    totalMRP: total,
    totalDiscount: Math.floor(total * 0.2),
    finalPayment: 99 + total - Math.floor(total * 0.2),
  };
  if(finalItems.length==0){
    return <h1 className="no-items">NO ITEMS IN BAG</h1>
  }
  return (
    <>
      <main>
        <div className="bag-page">
          <div className="bag-items-container">
            {finalItems.map((element) => (
              <BagItem item={element} />
            ))}
          </div>
          <BagSummary Summary={Summary} />
        </div>
      </main>
    </>
  );
};

export default Bag;
