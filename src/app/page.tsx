"use client"

import CartList from "./components/cartList";
import ProductList from "./components/product";
import { useGetAllPostQuery } from "./store/slice/postApi";


export default function Home() {

  const data = useGetAllPostQuery("")

  console.log("api data", data)

  return (
    <main className=" p-5 items-center gap-10 flex flex-col">
    <h1>Redux toolkit</h1>
    
    <ProductList />

    <h1 className='mt-5'>Cart List</h1>
    <CartList />
    </main>
  )
}
