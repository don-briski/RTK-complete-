import ProductList from "./components/product";


export default function Home() {


  return (
    <main className=" p-5 items-center gap-10 flex flex-col">
    <h1>Redux toolkit</h1>
    
    <ProductList />
    </main>
  )
}
