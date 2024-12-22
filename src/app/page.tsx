import ImageBanner from "./ui/ImageBanner";
import CategoryIconRow from "./ui/CategoryIconRow";
import ThingsCounter from "./ui/ThingsCounter";
import ProductsRow from "./ui/ProductsRow";
import Footer from './ui/Footer'
import OurParteners from "./ui/OurParteners";
import CategoryBar from "./ui/CategoryBar";
import FeaturedProducts from "./ui/FeaturedProducts";

export default function Home() {
  return (
    <div >

      <div className="overflow-hidden">
        <CategoryBar />
        <ImageBanner />
        <ThingsCounter />
        <ProductsRow />
        <CategoryIconRow />
        <FeaturedProducts />
        <OurParteners />
      </div>
    </div>
  );
}
