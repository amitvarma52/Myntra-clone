/** @format */

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { bagActions } from "../store/bagSlice";
import { MdDelete } from "react-icons/md";
import { IoAddCircleSharp } from "react-icons/io5";
const HomeItem = ({ item }) => {
  const bags = useSelector((state) => state.bags);
  const dispatch = useDispatch();
  const handleAdd = (e) => {
    dispatch(bagActions.addToBag(item.id));
  };
  const handleDelete=()=>{
    dispatch(bagActions.removeFromBag(item.id))
  }
  return (
    <div className="item-container">
      <img className="item-image" src={item.image} alt="item image" />
      <div className="rating">
        {item.rating.stars} ⭐ | {item.rating.count}
      </div>
      <div className="company-name">{item.company}</div>
      <div className="item-name">{item.item_name}</div>
      <div className="price">
        <span className="current-price">Rs {item.current_price}</span>
        <span className="original-price">Rs {item.original_price}</span>
        <span className="discount">({item.discount_percentage}% OFF)</span>
      </div>
      {bags.includes(item.id) ? (
        <button type="button" className="btn-add-bag btn btn-danger" onClick={handleDelete}> 
          <MdDelete color="white" /> remove
        </button>
      ) : (
        <button
          type="button"
          className="btn-add-bag btn btn-success"
          onClick={handleAdd}
        >
          <IoAddCircleSharp color="white" /> Add to bag
        </button>
      )}
    </div>
  );
};

export default HomeItem;
