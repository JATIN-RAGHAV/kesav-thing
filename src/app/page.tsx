import ImageBanner from "./ui/ImageBanner";
import CategoryIconRow from "./ui/CategoryIconRow";
import ThingsCounter from "./ui/ThingsCounter";
import OurParteners from "./ui/OurParteners";
import FeaturedProducts from "./ui/FeaturedProducts";

export default function Home() {
  return (
    <div>
      <div className="overflow-hidden">
        <ImageBanner />
        <ThingsCounter />
        <FeaturedProducts />
        <CategoryIconRow />
        <OurParteners />
      </div>
    </div>
  );
}
