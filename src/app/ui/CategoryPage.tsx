import CategoryBanner from "./CategoryBanner";
import ProductFullRow from "./ProductFullRow";
import categoryInterface from "../interfaces/category";
import fetchProducts from "../lib/fetchProducts";

export const revalidate = 3600;

export default async function CategoryPage({ category }: { category: string }) {
  const response = await fetchProducts();
  const products = response.filter(prdt => prdt.category.name === category)
  const bannerId = (await fetch('https://gupta-backend.vercel.app/api/37b51f00-d824-4384-8ee0-1e8965151640/categories').then(res => res.json()) as categoryInterface[]).filter(categor => categor.name == category)[0].billboardId;

  return (
    <div className="flex flex-col items-center">
      <CategoryBanner bannerId={bannerId} />
      <ProductFullRow products={products} />
    </div>
  )
}
