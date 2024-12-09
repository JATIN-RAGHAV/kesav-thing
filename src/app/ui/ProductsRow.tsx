import ProductPamphlet from './ProductPamphlet'
const products = [
  {
    imgFront: '/product1.jpg',
    imgBack: '/productBack1.jpg',
    title: 'The Red Book',
    mrp: 1000,
    discount: 20,
    featured: true
  },
  {
    imgFront: '/product1.jpg',
    imgBack: '/productBack1.jpg',
    title: 'The Red Book',
    mrp: 1000,
    discount: 20,
    featured: true
  },
  {
    imgFront: '/product1.jpg',
    imgBack: '/productBack1.jpg',
    title: 'The Red Book',
    mrp: 1000,
    discount: 20,
    featured: true
  },
  {
    imgFront: '/product1.jpg',
    imgBack: '/productBack1.jpg',
    title: 'The Red Book',
    mrp: 1000,
    discount: 20,
    featured: true
  },
  {
    imgFront: '/product1.jpg',
    imgBack: '/productBack1.jpg',
    title: 'The Red Book',
    mrp: 1000,
    discount: 20,
    featured: true
  },
  {
    imgFront: '/product1.jpg',
    imgBack: '/productBack1.jpg',
    title: 'The Red Book',
    mrp: 1000,
    discount: 20,
    featured: true
  },
]
const ProductsRow = () => {
  return (
    <div className="flex flex-wrap m-10 flex-grow flex-shrink">
      {products.map((product, index) => {
        return <ProductPamphlet key={index} {...product} />
      })}
    </div>
  )
}

export default ProductsRow;
