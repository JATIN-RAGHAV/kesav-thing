'use client'
import React, { useEffect, useState } from "react";
import axios from 'axios'
import Slider from "react-slick";
import ProductPamphlet from "./ProductPamphlet";

function FeaturedProducts() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 3
  };

  const [products, setProducts] = useState([])

  useEffect(() => {
    // https://gupta-backend.vercel.app/api/37b51f00-d824-4384-8ee0-1e8965151640/products
    const getData = async () => {
      const response = await axios.get('https://gupta-backend.vercel.app/api/37b51f00-d824-4384-8ee0-1e8965151640/products')
      console.log(response.data.filter(prdt => prdt.isFeatured)[0])
      setProducts(response.data.filter(prdt => prdt.isFeatured))
    }
    getData();
  }, []);

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {products.map((product, index) => {
          return (
            <div>
              <ProductPamphlet key={index} {...product} />
            </div>
          )
        })}
      </Slider>
    </div>
  );
}

export default FeaturedProducts;
