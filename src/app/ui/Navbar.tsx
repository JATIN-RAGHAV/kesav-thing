const Navbar = () => {

  const details = [{
    name: 'our Sales Expert',
    number: '+91 912803409',
    email: 'email@gmail.com'
  }, {
    name: 'our Sales Expert',
    number: '+91 912803409',
    email: 'email@gmail.com'
  }, {
    name: 'our Sales Expert',
    number: '+91 912803409',
    email: 'email@gmail.com'
  }]

  return (
    <div className="sticky top-0 z-40 justify-between bg-[#0c77b6] w-full h-[70px] flex items-center">
      <div className=" flex items-center w-36 mx-2">
        <img src="/logo.svg" height='80px' width='140px' />
      </div>

      <div className="max-w-lg w-full h-[30px] flex items-center relative">
        <img src="/search-icon.png" className="absolute h-1/2 ml-2" />
        <input className="w-full h-full rounded-3xl px-9 outline-none" />
        <div className="flex w-14 absolute text-black right-4 font-light text-xs items-center justify-between">
          <span className="h-full">Clear</span>
          <img src="/mic-icon.svg" width='25px' />
        </div>
      </div>

      <div className="mx-2 flex justify-evenly w-40 sm:w-[220px] text-white font-light" >
        <div className="group relative">
          <div className="flex w-6 sm:w-40 text-xs items-center">
            <img src="/call-icon.png" width='20px' />
            <div className="w-30 mx-1 justify-between hidden sm:block">
              Talk to our Experts
            </div>
            <img src="/down-arrow-icon.png" className="mr-1" width='13px' height='10px' />
          </div>
          <div className="absolute w-36 bg-white overflow-hidden max-h-0 group-hover:max-h-[400px] text-black transition-[max-height] ease-in-out duration-500">
            {details.map((e, index) => {
              return <Detail key={index} number={e.number} name={e.name} email={e.email} />
            })}
          </div>
        </div>
        <img src="/bag-icon.webp" width='20px' className="mx-1" />
        <img src="/user-icon.png" width='20px' className="mx-1" />
      </div>
    </div>
  )
}

const Detail = ({ name, number, email }: { name: string, number: string, email: string }) => {
  return (
    <div className="flex hover:bg-gray-100 transition-all flex-col h-16 text-sm justify-evenly pl-2 py-1">
      <span >{name}</span>
      <span className="text-xs font-thin text-blue-900 ml-2">{number}</span>
      <span className="text-xs font-thin text-blue-900 ml-2">{email}</span>
    </div>
  )
}
export default Navbar;
