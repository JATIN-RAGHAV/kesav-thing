import TopPanel from "./TopPanel";
import ImageBanner from "./ImageBanner";
import CategoryIconRow from "./CategoryIconRow";
import ThingsCounter from "./ThingsCounter";
import ProductsRow from "./ProductsRow";
import Footer from './Footer'
import OurParteners from "./OurParteners";




const MainPage = () => {
  return (
    <div className="overflow-hidden">
      <TopPanel />
      <ImageBanner />
      <ThingsCounter />
      <OurParteners />
      <CategoryIconRow />
      <Footer />
    </div>
  )
}

export default MainPage;
