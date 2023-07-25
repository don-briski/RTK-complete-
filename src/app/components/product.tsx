"use client";

import React, {useState} from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks"; 
import { addCart } from "../store/slice/cart";
import { addProduct } from "../store/slice/product";

const ProductList = () => {

    const cart = useAppSelector((state) => state.cartArray)
  const products = useAppSelector((state) => state.productArray);
    const dispatch = useAppDispatch()

   // console.log(cart, 'cart')

  const [name, setName] = useState("")
    const [category, setCategory] = useState("")
    const [qty, setQty ] = useState("")


  return (
    <div>
      <h1>Product list</h1>
      <div className=''>
        <div className="grid mx-auto p-4 grid-cols-4 bg-gray-600 gap-4 w-[85%] my-5 ">
          <input 
          type="text" 
          placeholder="item name" 
          className="bg-green-400  
          rounded-md " 
          value={name}
          onChange={(e) => setName(e.target.value )}
          />
          
          <input 
          type="text" 
          placeholder="category" 
          className="bg-green-400  rounded-md"
          value={category}
          onChange={(e) => setCategory(e.target.value )}
          />
          <input 
          type="number" 
          placeholder="quantity" 
          className="bg-green-400  rounded-md"
          value={qty}
          onChange={(e:any) => setQty(e.target.value )}
          />
          <button onClick={() => dispatch(addProduct({name: name, category:category, qty:qty}))}>Add Item</button>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-5">
        {products.map((items, index) => {
          return (
            <div
              key={index}
              className="min-w-350 border rounded-md bg-slate-300 p-3"
            >
              <h1>name: {items.name}</h1>
              <p>category: {items.category}</p>
              <p>quantity: {items.qty}</p>
              <button onClick={() => dispatch(addCart({name:items.name, category: items.category, qty: items.qty}))}
              className='text-white bg-black/70 p-3 mt-3 rounded-sm'> Add cart</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductList;
