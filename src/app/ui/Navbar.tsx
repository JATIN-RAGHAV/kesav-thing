import Link from "next/link";
import Image from "next/image";

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
    <div className="h-20 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative">
      {/* MOBILE */}
      <div className="h-full flex items-center justify-between md:hidden">
        <Link href="/">
          <div className="text-2xl tracking-wide">LAMA</div>
        </Link>
      </div>
      {/* BIGGER SCREENS */}
      <div className="hidden md:flex items-center justify-between gap-8 h-full">
        {/* LEFT */}
        <div className="w-1/3 xl:w-1/2 flex items-center gap-12">
          <Link href="/" className="flex items-center gap-3">
            <Image src="/logo.png" alt="" width={24} height={24} />
            <div className="text-2xl tracking-wide">LAMA</div>
          </Link>
          <div className="hidden xl:flex gap-4">
            <Link href="/">Homepage</Link>
            <Link href="/">Shop</Link>
            <Link href="/">Deals</Link>
            <Link href="/">About</Link>
            <Link href="/">Contact</Link>
          </div>
        </div>
        {/* RIGHT */}
      </div>
    </div>
  );
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
