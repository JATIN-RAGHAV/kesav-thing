import { redirect } from 'next/navigation';
import { product } from '../interfaces/product'
import { revalidatePath } from 'next/cache';

const ProductPamphelt = (product: product) => {
  const price = parseInt(product.price);
  const mPrice = parseInt(product.mPrice);
  const discount = Math.round((price / mPrice) * 100)
  const image = product.images[0].url
  const nameArray = product.name.split('')
  let name = nameArray.length > 35 ? nameArray.splice(0, 35).join('') + '...' : product.name

  return (
    <div className="m-2 p-1 flex flex-col items-center box-border group flex-grow w-[200px] bg-white rounded-lg h-[300px] hover:shadow-xl transition-all" >
      <div className="overflow-hidden relative w-[200px] h-[200px] group-hover:h-[160px] items-center justify-center flex rounded-md transition-all">
        <img src={image} className="rounded-md z-0 w-[200px] group-hover:w-[160px] transition-all" />
      </div>
      <div className="h-[100px] px-4 mt-2">
        <div className="text-sm ">{name}</div>
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
      <div className="w-[200px] px-4 items-center h-0 overflow-hidden group-hover:h-[60px] justify-evenly flex transition-all">
        <img src="/cart-icon.png" className="w-[25px] h-[25px] scale-x-[-1]" />
        <div className="w-max text-xs text-white bg-themeBlue h-[25px] flex items-center justify-center px-2 py-1 rounded-full">
          BUY NOW
        </div>
      </div>
    </div >
  )
}

export default ProductPamphelt;
