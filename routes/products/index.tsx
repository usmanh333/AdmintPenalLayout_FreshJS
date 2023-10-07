import ProductsGrid from "../../islands/ProductsGrid.tsx";

export default function index() {
  return (
    <div class={'relative left-[16.5%] w-[83.5%]'}>
      <h2 className="text-3xl text-white font-bold leading-7 m-7 mt-8">Products</h2>
      <ProductsGrid/>
    </div>
  )
}
