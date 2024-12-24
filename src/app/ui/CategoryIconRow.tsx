'use client'
import axios from "axios"
import { useEffect } from "react"

const categoryIcons = [
  {
    imgUrl: '/category1.png',
    redirectUrl: '/'
  },
  {
    imgUrl: '/category2.png',
    redirectUrl: '/'
  },
  {
    imgUrl: '/category3.png',
    redirectUrl: '/'
  },
  {
    imgUrl: '/category4.png',
    redirectUrl: '/'
  },
  {
    imgUrl: '/category5.png',
    redirectUrl: '/'
  },
]
const CategoryIconRow = () => {
  useEffect(() => {
    const getCategories = async () => {
      const result = await axios.get('https://gupta-backend.vercel.app/api/37b51f00-d824-4384-8ee0-1e8965151640/categories')
      console.log(result)
    }
    getCategories();
  }, [])
  return (<div>
    <div className='flex items-center font-bold justify-center text-4xl p-1 box-border'>
      Categories
    </div>
    <div className="flex w-full h-[150px] bg-white my-2 items-center justify-evenly">
      {categoryIcons.map((category, index) => {
        return <CategoryIcon key={index} {...category} />
      })}
    </div>
  </div>)
}


const CategoryIcon = ({ imgUrl, redirectUrl }: { imgUrl: string, redirectUrl: string }) => {
  return (
    <div className="w-[120px] flex items-center justify-center">
      <div className="h-[100px] w-[100px] duration-500 ease-in-out rounded-full flex items-center hover:h-[120px] hover:w-[120px] transition-all hover:shadow-2xl">
        <img src={imgUrl} className="rounded-full" />
      </div>
    </div>
  )
}

export default CategoryIconRow
