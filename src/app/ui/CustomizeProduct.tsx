import React from 'react'
import { product } from '../interfaces/product';
import poles from '../interfaces/poles';
import currentRatingInterface from '../interfaces/currentRating';
import fetchProducts from "../lib/fetchProducts";

export const revalidate = 3600;

const CustomizeProducts = async ({ product }: { product: product }) => {
  const startTime = Date.now();
  const brandId = product.brandId
  const categoryId = product.categoryId
  const currentCurrentId = product.currentRatingId;
  const currentPoleId = product.polesId;

  console.log(`Started fetching products ${Date.now() - startTime}`)
  const AllProducts = await fetchProducts();
  console.log(`Got products in ${Date.now() - startTime}`);
  const ourProducts = AllProducts.filter(prdt => {
    return (prdt.categoryId == categoryId && prdt.brandId == brandId)
  })
  console.log(`Sorted products in ${Date.now() - startTime}`)

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

  console.log(`made links in ${Date.now() - startTime}`)

  currentRatings.sort((a, b) => parseInt(a.name) - parseInt(b.name));
  for (let i = 0; i < currentRatings.length; i++) {
    if (currentRatings[i].id == currentCurrentId) {
      const first = currentRatings[0]
      currentRatings[0] = currentRatings[i]
      currentRatings[i] = first;
      break;
    }
  }
  poles.sort((a, b) => parseInt(a.name) - parseInt(b.name));
  for (let i = 0; i < poles.length; i++) {
    if (poles[i].id == currentPoleId) {
      const first = poles[0]
      poles[0] = poles[i]
      poles[i] = first;
      break;
    }
  }

  const endTime = Date.now();
  console.log(`Time taken = ${endTime - startTime}`)
  return (
    <div className='flex flex-col gap-6'>
      <h4 className='font-medium'>Choose a current rating</h4>
      <div className='flex items-center gap-3 w-full h-[65px] overflow-x-scroll scroll-smooth flex-shrink-0'>
        {currentRatings.map(current => {
          return (<CurrentDiv name={current.name} url={currentToProduct[current.id].url} key={current.id} isSelected={currentCurrentId == current.id} />)
        })}
      </div>
      <h4 className='font-medium'>Choose a poles</h4>
      <div className='flex items-center gap-3'>
        {poles.map(pole => {
          return (<PolesDiv key={pole.id} name={pole.name} url={poleToProduct[pole.id].url
          } isSelected={pole.id == currentPoleId} />)
        })}
      </div>
    </div>
  )
}

const CurrentDiv = ({ name, url, isSelected }: { name: string, url: string, isSelected: boolean }) => {
  const classes = `h-[30px] w-max px-2 rounded-full flex items-center justify-center ${isSelected ? 'bg-white' : 'bg-themeBlue'} ${isSelected && 'text-lg font-bold'} ${isSelected ? 'text-themeBlue' : 'text-white'}`
  return (
    <a href={url} >
      <div className={classes} >
        {name}
      </div>
    </a>
  )
}

const PolesDiv = ({ name, url, isSelected }: { name: string, url: string, isSelected: boolean }) => {
  const classes = `h-[30px] w-max px-2 rounded-full flex items-center justify-center ${isSelected ? 'bg-white' : 'bg-themeBlue'} ${isSelected && 'text-lg font-bold'} ${isSelected ? 'text-themeBlue' : 'text-white'}`
  return (
    <a href={url} className={classes} >{name}</a>
  )
}

export default CustomizeProducts;
