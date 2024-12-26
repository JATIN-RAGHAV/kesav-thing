import ImageBanner from "./ui/ImageBanner";
import CategoryIconRow from "./ui/CategoryIconRow";
import ThingsCounter from "./ui/ThingsCounter";
import OurParteners from "./ui/OurParteners";
import FeaturedProductsServer from "./ui/FeaturedProductsServer";
import Enquiry from "./ui/Enquiry";

export default function Home() {
  return (
    <div>
      <div className="overflow-hidden">
        <ImageBanner />
        <ThingsCounter />
        <div className="flex justify-center py-2">
          <div className="h-[2px] bg-gray-300 w-11/12" />
        </div>
        <FeaturedProductsServer />
        <div className="flex justify-center py-2">
          <div className="h-[2px] bg-gray-300 w-11/12" />
        </div>
        <CategoryIconRow />
        <div className="flex justify-center py-2">
          <div className="h-[2px] bg-gray-300 w-11/12" />
        </div>
        <OurParteners />
        <div className="flex justify-center py-2">
          <div className="h-[2px] bg-gray-300 w-11/12" />
        </div>
        <Enquiry />
      </div>
    </div>
  );
}
