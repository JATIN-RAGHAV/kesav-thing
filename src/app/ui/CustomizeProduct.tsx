import React from 'react'
import { product } from '../interfaces/product';
import poles from '../interfaces/poles';
import currentRatingInterface from '../interfaces/currentRating';

const CustomizeProducts = async ({ product }: { product: product }) => {
  const brandId = product.brandId
  const categoryId = product.categoryId
  const currentCurrentId = product.currentRatingId;
  const currentPoleId = product.polesId;

  const AllProducts = await fetch('https://gupta-backend.vercel.app/api/37b51f00-d824-4384-8ee0-1e8965151640/products').then(res => res.json()) as product[]
  const ourProducts = AllProducts.filter(prdt => {
    return (prdt.categoryId == categoryId && prdt.brandId == brandId)
  })

  let poles: poles[] = [];
  let currentRatings: currentRatingInterface[] = [];
  let poleToProduct: { [key: string]: { url: string, name: string, id: string } } = {};
  let currentToProduct: { [key: string]: { url: string, name: string, id: string } } = {};

  for (let prdt of ourProducts) {
    if (currentCurrentId == prdt.currentRatingId) {
      if (!poleToProduct[prdt.polesId]) {
        poleToProduct[prdt.polesId] = {
          name: prdt.name,
          id: prdt.id,
          url: '/product/' + prdt.id
        }
        poles.push(prdt.poles)
      }
    }

    if (currentPoleId == prdt.polesId) {
      if (!currentToProduct[prdt.currentRatingId]) {
        currentToProduct[prdt.currentRatingId] = {
          name: prdt.name,
          id: prdt.id,
          url: '/product/' + prdt.id
        }
        currentRatings.push(prdt.currentRating)
      }
    }
  }


  currentRatings.sort((a, b) => parseInt(a.name) - parseInt(b.name));
  poles.sort((a, b) => parseInt(a.name) - parseInt(b.name));

  return (
    <div className='flex flex-col gap-6'>
      <h4 className='font-medium'>Choose a current rating</h4>
      <div className='flex items-center gap-3 max-w-[500px] h-[60px] overflow-x-scroll scroll-smoothk'>
        {currentRatings.map(current => {
          return (<CurrentDiv name={current.name} url={currentToProduct[current.id].url} key={current.id} />)
        })}
      </div>
      <h4 className='font-medium'>Choose a poles</h4>
      <div className='flex items-center gap-3'>
        {poles.map(pole => {
          return (<PolesDiv key={pole.id} name={pole.name} url={poleToProduct[pole.id].url
          } />)
        })}
      </div>
    </div>
  )
}

const PolesDiv = ({ name, url }: { name: string, url: string }) => {
  return (
    <a href={url} className='h-[30px] w-[40px] bg-themeBlue text-white p-0 rounded-full flex items-center justify-center'>{name}</a>
  )
}

const CurrentDiv = ({ name, url }: { name: string, url: string }) => {
  return (
    <a href={url} className='h-[30px] w-10 bg-themeBlue text-white rounded-full flex items-center justify-center'>{name}</a>
  )
}

export default CustomizeProducts;
