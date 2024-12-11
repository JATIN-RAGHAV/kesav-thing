import ImageBanner from "./ImageBanner";
import CategoryIconRow from "./CategoryIconRow";
import ThingsCounter from "./ThingsCounter";
import ProductsRow from "./ProductsRow";
import Footer from './Footer'
import OurParteners from "./OurParteners";
import CategoryBar from "./CategoryBar";
import ImageSlider from "./ImageSlider";




const MainPage = () => {
  return (
    <div className="overflow-hidden">
      <CategoryBar />
      <ImageBanner />
      <ThingsCounter />
      <ProductsRow />
      <CategoryIconRow />
      <OurParteners />
      <Footer />
    </div>
  )
}

export default MainPage;
