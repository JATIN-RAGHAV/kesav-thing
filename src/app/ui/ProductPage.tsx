import ProductImages from "./ProductImages"
import CustomizeProducts from "./CustomizeProduct"
import { product } from "../interfaces/product";

export const revalidate = 3600;

const ProductPage = async ({ productId }: { productId: string }) => {

  const product = await fetch('https://gupta-backend.vercel.app/api/37b51f00-d824-4384-8ee0-1e8965151640/products/' + productId, { cache: 'force-cache' }).then(res => res.json()) as product
  const images = product.images.map(image => {
    return {
      id: image.id,
      url: image.url
    }
  })

  return (
    <div className='px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative flex flex-col lg:flex-row gap-16 my-16'>
      <div className='w-full lg:w-1/2 lg:sticky top-20 h-max'>
        <ProductImages images={images} />
      </div>
      <div className='w-full lg:w-1/2 flex flex-col gap-6'>
        <h1 className='text-4xl font-medium'>{product.name}</h1>
        <div className='h-[2px] bg-gray-100' />
        <div className='flex items-center gap-4'>
          <h3 className='text-xl text-gray-500 line-through'>₹{product.mPrice}</h3>
          <h2 className='font-medium text-2xl'>₹{product.price}</h2>
        </div>
        <div className='h-[2px] bg-gray-100' />
        <CustomizeProducts product={product} />
        <div className='h-[2px] bg-gray-100' />
        <div className='text-sm'>
          <h4 className='font-medium mb-4'>DESCRIPTION</h4>
          <p>{product.description}</p>
        </div>
      </div>
    </div>
  )
}

export default ProductPage
