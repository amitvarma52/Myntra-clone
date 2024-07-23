/** @format */

import React from "react";
import HomeItem from "../components/HomeItem";
import { useSelector } from "react-redux";

const Home = () => {
  const items=useSelector(state=>state.items)
  return (
    <main>
      <div className="items-container">
        {items.map(element=> <HomeItem item={element} key={element.id}/>)}
      </div>
    </main>
  );
};

export default Home;
