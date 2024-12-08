'use client'
import { Children, useEffect, useState } from "react";

const things = [
  {
    imgUrl: '/thingEmoji1.png',
    title: 'PRODUCTS SOLD',
    number: 150000
  },
  {
    imgUrl: '/thingEmoji2.png',
    title: 'PINCODES DELIVERED',
    number: 20000
  },
  {
    imgUrl: '/thingEmoji3.png',
    title: 'CO2 REDUCED',
    number: 285230
  },
  {
    imgUrl: '/skull.svg',
    title: 'HUMANS KILLED',
    number: 200000
  },
]

const ThingsCounter = () => {
  return (
    <div className="h-[100px] bg-white flex items-center justify-around">
      {things.map(thing => {
        return <Counter {...thing} />
      })}
    </div>
  )
}

const Counter = ({ imgUrl, number, title }: { imgUrl: string, number: number, title: string }) => {
  const [count, setCount] = useState<number>(0);
  useEffect(() => {
    setCount(c => {
      if (c < number) {
        return c + 40;
      }
      return number;
    })
  }, [count])
  return (
    <div className="flex items-center">
      <div className="rounded-2xl h-[40px] w-[40px]">
        <img src={imgUrl} />
      </div>
      <div className="px-1">
        <div className="" >{count}+</div>
        <div className="font-thin text-gray-700 text-xs" >{title}</div>
      </div>
    </div>
  )
}

export default ThingsCounter;
