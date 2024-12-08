import TopPanel from "./TopPanel";
import ImageBanner from "./ImageBanner";
import ProductPamphelt from './ProductPamphlet'
import ThingsCounter from "./ThingsCounter";

const products = [
  {
    imgFront: '/product1.jpg',
    imgBack: '/productBack1.jpg',
    title: 'The Red Book',
    mrp: 1000,
    discount: 20
  }
]

const MainPage = () => {
  return (
    <div className="overflow-hidden">
      <TopPanel />
      <ImageBanner />
      <ThingsCounter />
      <div className="flex flex-wrap m-10 flex-grow flex-shrink">
        {products.map(prdt => {
          return (<ProductPamphelt {...prdt} />)
        })}
        {products.map(prdt => {
          return (<ProductPamphelt {...prdt} />)
        })}
        {products.map(prdt => {
          return (<ProductPamphelt {...prdt} />)
        })}
        {products.map(prdt => {
          return (<ProductPamphelt {...prdt} />)
        })}
        {products.map(prdt => {
          return (<ProductPamphelt {...prdt} />)
        })}
        {products.map(prdt => {
          return (<ProductPamphelt {...prdt} />)
        })}
        {products.map(prdt => {
          return (<ProductPamphelt {...prdt} />)
        })}
        {products.map(prdt => {
          return (<ProductPamphelt {...prdt} />)
        })}
      </div>
    </div>
  )
}

export default MainPage;
