"use client";

import React from "react";
//import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { useAppSelector, useAppDispatch } from "../store/hooks";
import { deleteCart } from "../store/slice/cart";



const CartList = () => {
  const cart = useAppSelector((state) => state.cartArray);
  const dispatch = useAppDispatch()
  
  return (
    <div>
      {cart.map((val, index) => {
        return (
          <div
            key={index}
            className="grid grid-cols-4  gap-auto items-center"
          >
            <div>{val.name}</div>
            <div>{val.category}</div>
            <div>{val.qty}</div>
            <div>
              <button className="text-white bg-black/70 p-3 mt-3 rounded-sm"
              onClick={() => dispatch(deleteCart(val.name))}>
                delete cart
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CartList;
