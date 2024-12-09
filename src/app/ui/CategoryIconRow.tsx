
const categoryIcons = [
  {
    imgUrl: '/onePieceLogo.jpg',
    redirectUrl: '/'
  },
  {
    imgUrl: '/berserkLogo.png',
    redirectUrl: '/'
  },
  {
    imgUrl: '/gintamaLogo.jpg',
    redirectUrl: '/'
  },
  {
    imgUrl: '/vinlandSaga.jpg',
    redirectUrl: '/'
  },
]
const CategoryIconRow = () => {
  return (<div className="flex w-full h-[150px] bg-white my-2 items-center justify-evenly">
    {categoryIcons.map(category => {
      return <CategoryIcon {...category} />
    })}
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
