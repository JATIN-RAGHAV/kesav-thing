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
/* const imgUrl = ['banner-1.jpg', 'banner-2.jpg', 'banner-3.jpg', 'banner-1.jpg', 'banner-2.jpg', 'banner-3.jpg']
return (
<div className="w-full aspect-video z-0 relative bg-black lg:h-[400px] md:h-[300px] min-h-[200px]">
  <div className="flex z-10 overflow-auto h-full snap-mandatory scroll-smooth w-full top-0 left-0">
  </div>
  <div className="flex pb-2 justify-center items-end text-red-700 absolute w-full z-10 h-full ">
    <div>hello</div>
  </div>
</div>
) */
