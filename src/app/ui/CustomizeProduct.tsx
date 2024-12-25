import React from 'react'
import { product } from '../interfaces/product';

const CustomizeProducts = async ({ product }: { product: product }) => {
  const brandId = product.brandId
  const categoryId = product.categoryId

  const AllProducts = await fetch('https://gupta-backend.vercel.app/api/37b51f00-d824-4384-8ee0-1e8965151640/products').then(res => res.json()) as product[]
  const ourProducts = AllProducts.filter(prdt => {
    return (prdt.categoryId == categoryId && prdt.brandId == brandId)
  })
  console.log(ourProducts)

  return (
    <div className='flex flex-col gap-6'>
      <h4 className='font-medium'>Choose a current rating</h4>
      <div className='flex items-center gap-3'>
        {product.currentRating.name}
      </div>
      <h4 className='font-medium'>Choose a poles</h4>
      <div className='flex items-center gap-3'>
        {product.poles.name}
      </div>

    </div>
  )
}
export default CustomizeProducts;
