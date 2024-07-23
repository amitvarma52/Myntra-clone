/** @format */
import { createSlice } from "@reduxjs/toolkit";
import { DEFAULT_ITEMS } from "../data/items";
import { act } from "react";
export const itemsSlice = createSlice({
  name: "items",
  initialState: [],
  reducers: {
    addInitalItems: (state, action) => {
      return action.payload
    },
  },
});
export const itemsAction = itemsSlice.actions;