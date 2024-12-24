import { product } from "../interfaces/product"
import ProductPamphletFull from "./ProductPamphletFull"

const ProductFullRow = ({ products }: { products: product[] }) => {
  if (products.length == 0) {
    return (
      <div className="flex flex-col gap-5 my-5">
        <SkeletonLoaderProductFull />
        <SkeletonLoaderProductFull />
        <SkeletonLoaderProductFull />
        <SkeletonLoaderProductFull />
        <SkeletonLoaderProductFull />
      </div>
    )
  } else {
    return (
      <div className="flex flex-col m-10 gap-5 ">
        {products.map((prdt, index) => {
          return <div key={index}><ProductPamphletFull {...prdt} /></div>
        })}
      </div>
    )
  }
}
const SkeletonLoaderProductFull = () => {
  return (
    <div className="w-[800px] bg-blue-200 h-[200px] flex items-center px-7 rounded-xl group hover:shadow-xl transition-all duration-500">
      <div className="bg-white w-[150px] h-[150px] rounded-lg"></div>
      <div className="h-[130px] w-[600px] ml-4 gap-7 flex flex-col">
        <div className="bg-white w-[500px] h-[20px] rounded-lg"></div>
        <div className="bg-white w-[300px] h-[20px] rounded-lg"></div>
        <div className="bg-white w-[400px] h-[20px] rounded-lg"></div>
      </div>
    </div>
  )
}

export default ProductFullRow;
