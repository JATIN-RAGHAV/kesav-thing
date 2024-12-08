const ProductPamphelt = ({ imgFront, imgBack, title, mrp, discount }: { imgFront: string, imgBack: string, title: string, mrp: number, discount: number }) => {
  const price = mrp - (mrp * (discount / 100))
  return (
    <div className="m-1 p-1 flex flex-col items-center box-border max-w-[400px] flex-grow min-w-[300px] bg-white rounded-lg h-[400px]" >
      <div className="w-max pt-4 relative h-full">
        <div className="group/img overflow-hidden w-[200px] h-[300px] relative">
          <div className="w-[200px] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] rounded-md overflow-hidden">
            <img src={imgFront} className="rounded-md group-hover/img:opacity-0 group-hover/img:hidden w-[300px]" />
            <img src={imgBack} className="rounded-md hidden group-hover/img:opacity-100 group-hover/img:block w-[300px]" />
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
    </div>
  )
}

export default ProductPamphelt;
