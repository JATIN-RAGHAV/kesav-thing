const categories = [
  { name: 'ACB', link: '/ACB' },
  { name: 'MCB', link: '/MCB' },
  { name: 'MCCB', link: '/MCCB' },
  { name: 'RCCB', link: '/RCCB' },
  { name: 'ISOLATOR', link: '/ISOLATOR' },
  { name: 'OVERLOAD RELAY', link: '/OVERLOAD_RELAY' },
  { name: 'POWER CONTRACTOR', link: '/POWER_CONTRACTOR' },
  { name: 'WIRES & CABLES', link: '/WIRES_AND_CABLES' },
]
const CategoryBar = () => {
  return (
    <div className="h-[45px] w-full bg-white flex items-center box-border relative  justify-evenly">
      {categories.map((category, index) => {
        return <CategoryButton key={index} {...category} />
      })}
    </div>
  )
}

const CategoryButton = ({ name, link }: { name: string, link: string }) => {
  return (
    <a href={link} className="text-xs font-semibold hover:text-sm hover:shadow-lg transition-all">
      {name}
    </a>
  )
}

export default CategoryBar;
