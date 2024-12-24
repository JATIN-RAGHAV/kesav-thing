import CategoryBanner from "./CategoryBanner";
import ProductFullRow from "./ProductFullRow";
import { product } from "../interfaces/product";
import axios from "axios";

export default async function CategoryPage({ category }: { category: string }) {

  const response = (await axios.get('https://gupta-backend.vercel.app/api/37b51f00-d824-4384-8ee0-1e8965151640/products')).data as product[];
  const products = response.filter(prdt => prdt.category.name === category)
  const bannerId = (await axios.get('https://gupta-backend.vercel.app/api/37b51f00-d824-4384-8ee0-1e8965151640/categories')).data.filter(cat => cat.name == category)[0].billboardId;

  return (
    <div className="flex flex-col items-center overflow-scroll h-[800px]">
      <CategoryBanner bannerId={bannerId} />
      <ProductFullRow products={products} />
    </div>
  )
}
