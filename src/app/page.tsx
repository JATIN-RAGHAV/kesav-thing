import ImageBanner from "./ui/ImageBanner";
import CategoryIconRow from "./ui/CategoryIconRow";
import ThingsCounter from "./ui/ThingsCounter";
import OurParteners from "./ui/OurParteners";
import FeaturedProductsServer from "./ui/FeaturedProductsServer";

export default function Home() {
  return (
    <div>
      <div className="overflow-hidden">
        <ImageBanner />
        <ThingsCounter />
        <FeaturedProductsServer />
        <CategoryIconRow />
        <OurParteners />
      </div>
    </div>
  );
}
