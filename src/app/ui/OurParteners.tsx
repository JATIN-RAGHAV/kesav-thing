'use client'
import Slider from 'react-slick'

const Parteners = ['/partner1.jpg', '/partner2.jpg', '/partner3.jpg', '/partner4.jpg', '/partner5.png']

const OurParteners = () => {

  const settings = {
    infinite: true,
    slidesToShow: 5,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 3000,
    cssEase: "linear"
  }

  return (
    <div className='my-4 px-2 h-[200px] bg-white box-border'>
      <div className='flex items-center font-bold justify-center text-4xl p-1 box-border'>
        Our Partners
      </div>
      <Slider {...settings} className='h-[150px] flex items-center bg-white' >
        {Parteners.map((partner, index) => {
          return <Image key={index} imgUrl={partner} />
        })}
      </Slider>
    </div>
  )
}

const Image = ({ imgUrl }: { imgUrl: string }) => {
  return (
    <div className='max-w-[400px] w-full bg-white h-[140px] flex items-center justify-center m-1 '>
      <img src={imgUrl} className='w-[100px] h-[100px] bg-white' />
    </div>
  )
}

export default OurParteners;