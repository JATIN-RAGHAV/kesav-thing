'use client'
import Slider from 'react-slick'

const ImageBanner = () => {

  const settings = {
    dots: true,
    autoplay: true,
    infinite: true,
    speed: 1500,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slideToScroll: 1
  }
  const imgUrl = ['banner-1.jpg', 'banner-2.jpg', 'banner-3.jpg']

  return (
    <div className='mb-5 '>
      <Slider {...settings} >
        {imgUrl.map((imgU, i) => {
          return <Image imgUrl={imgU} key={i} />
        })}
      </Slider>
    </div>
  )
}

const Image = ({ imgUrl }: { imgUrl: string }) => {
  return (<img
    src={imgUrl}
  />)
}

export default ImageBanner;
