const CategoryBar = () => {
  return (
    <div className="h-[45px] w-full bg-white flex items-center box-border relative">
      <div className="absolute left-[45px] top-0 h-full w-max flex items-center cursor-pointer group">
        <div className="flex flex-col justify-evenly h-[15px]">
          <LittleBar />
          <LittleBar />
          <LittleBar />
        </div>
        <div className="h-full flex items-center ml-2 text-xs font-bold w-max">
          All Categories
        </div>
        <div className=" ml-1 w-0 h-0 border-l-[7px] border-l-transparent border-r-[7px] border-r-transparent border-t-[7px] border-t-black"></div>
        <div className="absolute w-[600px] border-0 group-hover:border-2 border-gray-300 bg-white h-0 group-hover:h-[400px] left-[-45px] z-50 top-[45px] transition-[height border] ease-in-out duration-700">
        </div>
      </div>
      <div>

      </div>
      <div>

      </div>
    </div>
  )
}

const LittleBar = () => {
  return <div className="w-[17px] h-[2px] bg-black"></div>
}

export default CategoryBar;
