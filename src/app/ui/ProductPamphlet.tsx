const ProductPamphelt = ({ imgFront, imgBack, title, mrp, discount, featured }: { imgFront: string, imgBack: string, title: string, mrp: number, discount: number, featured: boolean }) => {
  const price = mrp - (mrp * (discount / 100))
  return (
    <div className="m-1 p-1 flex flex-col items-center box-border max-w-[400px] flex-grow min-w-[300px] bg-white relative rounded-lg h-[400px]" >
      <div className="w-max pt-4 relative h-full">
        <div className="overflow-hidden relative w-[200px] h-[300px] rounded-md">
          <img src={imgFront} className="rounded-md z-0 w-[300px]" />
          <div className="w-[200px] hover:w-[300px] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] rounded-md overflow-hidden z-10 h-full flex justify-center items-center opacity-0 ease-in-out duration-700 hover:opacity-100 transition-all">
            <img src={imgBack} className="rounded-md  w-full" />
          </div>
        </div>
        <div className="h-[60px] absolute bottom-0">
          <div className="text-lg">{title}</div>
          <div>
            <span className="text-sm font-bold" >₹{price}</span>
            <span className="text-center px-2 py-1 text-xs bg-themeBlue rounded-2xl mx-1 text-white" >{discount}% OFF</span>
          </div>
        </div>
      </div>
      <div className={`absolute flex h-[30px] w-[40px] justify-center items-center ${featured ? '' : 'hidden'} top-0 left-0 text-white text-xs`} >
        <img src="/featuredTag.png" className="absolute top-[-15px]" />
      </div>
    </div >
  )
}

export default ProductPamphelt;
