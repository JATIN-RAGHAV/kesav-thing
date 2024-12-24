'use client'
import React, { useEffect, useState, useRef } from "react";
import axios from 'axios'
import ProductPamphlet from "./ProductPamphlet";
import { product } from "./ProductPamphlet";
import ProductShimmer from "./ProductShimmer";
import { ArrowLeft } from 'lucide-react';
import { ArrowRight } from "lucide-react";

function FeaturedProducts() {

  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [products, setProducts] = useState<product[]>([])

  useEffect(() => {
    const getData = async () => {
      const response = (await axios.get('https://gupta-backend.vercel.app/api/37b51f00-d824-4384-8ee0-1e8965151640/products/featuredProducts')).data as product[]
      setProducts(response);
    }
    getData();
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    const container = scrollContainerRef.current
    if (!container) return

    const scrollAmount = 300
    const currentScroll = container.scrollLeft
    const targetScroll =
      direction === 'left'
        ? currentScroll - scrollAmount
        : currentScroll + scrollAmount

    container.scrollTo({
      left: targetScroll,
      behavior: 'smooth',
    })
  }
  if (products.length == 0) {
    return (
      <div className="relative w-full px-4 py-6">
        <div className='flex items-center font-bold justify-center text-4xl p-1 box-border'>
          Featured Products
        </div>
        <div className="flex m-2 justify-center w-max overflow-hidden gap-5">
          <ProductShimmer />
          <ProductShimmer />
          <ProductShimmer />
          <ProductShimmer />
          <ProductShimmer />
          <ProductShimmer />
          <ProductShimmer />
        </div>
      </div>)
  }

  return (
    <div className="relative w-full px-4 py-6">
      <div className="mb-6 w-full font-semibold flex justify-center text-gray-900 text-4xl">
        Featured Products
      </div>
      <div className="relative">
        <div
          ref={scrollContainerRef}
          className="flex gap-2 overflow-x-auto scrollbar-hide scroll-smooth"
        >
          {products.map((product) => (
            <ProductPamphlet key={product.id} {...product} />
          ))}
        </div>
        <div className="absolute left-2 w-[20px] h-[20px] top-[50%] translate-y-[-50%] ">
          <button
            className="h-10 w-10 rounded-full shadow-md bg-gray-100 items-center justify-center flex"
            onClick={() => scroll('left')}
          >
            <ArrowLeft />
          </button>
        </div>
        <div className="absolute right-2 w-[20px] h-[20px] top-[50%] translate-y-[-50%] ">
          <button
            className="h-10 w-10 rounded-full shadow-md bg-gray-100 items-center justify-center flex"
            onClick={() => scroll('right')}
          >
            <ArrowRight />
          </button>
        </div>
      </div>
    </div>
  )
}

export default FeaturedProducts; 
