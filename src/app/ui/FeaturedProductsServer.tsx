import FeaturedProductsClient from "./FeaturedProductsClient";
import { product } from "../interfaces/product";

export const revalidate = 3600;

const FeaturedProductsServer = async () => {
  const products = await fetch('https://gupta-backend.vercel.app/api/37b51f00-d824-4384-8ee0-1e8965151640/products/featuredProducts', { cache: 'force-cache' }).then(res => res.json()) as product[];
  return (
    <FeaturedProductsClient products={products} />
  )
}

export default FeaturedProductsServer;
