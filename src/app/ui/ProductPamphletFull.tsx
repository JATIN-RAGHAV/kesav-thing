import { product } from "../interfaces/product"
import AddToCartButton from "@/app/ui/AddToCartButton";

const ProductPamphletFull = (product: product) => {
  const price = parseInt(product.price);
  const mPrice = parseInt(product.mPrice);
  const discount = Math.round((price / mPrice) * 100)
  const image = product.images[0].url;
  const name = product.name
  const descriptionArray = product.description.split('')
  const description = descriptionArray.length > 150 ? descriptionArray.splice(0, 150).join('') + '...' : descriptionArray.join('')

  return (
    <div className="w-[800px] bg-blue-200 h-[200px] flex items-center px-7 rounded-xl group hover:shadow-xl transition-all duration-500">
      <a href={'/product/' + product.id}>
        <img src={image} className="w-[150px] h-[150px] group-hover:w-[180px] group-hover:h-[180px] transition-all duration-300 rounded-xl" />
      </a>
      <div className="h-[130px]  ml-5 flex w-[600px]">
        <a href={'/product/' + product.id}>
          <div className="w-[450px] mr-2 box-border">
            <div>
              {name}
            </div>
            <div className="text-sm text-gray-600 mb-2">
              {description}
            </div>
            <div>
              <div className="text-sm font-bold" >₹{price}</div>
              <div className="font-extralight text-xs mt-[2px]">
                <span className="relative"> ₹{mPrice}
                  <div className="absolute w-full h-[1px] bg-gray-900 top-[50%]"></div>
                </span>
                <span className="text-center px-2 py-1 bg-white rounded-2xl mx-1 font-bold text-green-900" >{discount}% OFF</span>
              </div>
            </div>
          </div>
        </a>
        <div className="items-center w-[100px] flex flex-col">
          <AddToCartButton  price={product.price} mPrice={product.mPrice} id={product.id} isFeatured={product.isFeatured}
                            gstRate={product.gstRate} currentRatingId={product.currentRatingId} brandId={product.brandId} images={product.images} name={product.name}
                            storeId={product.storeId} categoryId={product.categoryId} isArchived={product.isArchived}
                            createdAt={product.createdAt} updatedAt={product.updatedAt}  polesId={product.polesId} poles={product.poles} description={product.description}
                            brand={product.brand} category={product.category} currentRating={product.currentRating}/>
          <div className="w-max text-xs text-white bg-themeBlue h-[25px] flex items-center justify-center px-2 py-1 rounded-full">
            BUY NOW
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductPamphletFull
