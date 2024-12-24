import axios from "axios"

const CategoryBanner = async ({ bannerId }: { bannerId: string }) => {

  let url = ''
  if (bannerId)
    url = (await axios.get('https://gupta-backend.vercel.app/api/37b51f00-d824-4384-8ee0-1e8965151640/billboards/' + bannerId)).data.imageUrl

  if (url)
    return (
      <div className="mt-2">
        <img src={url} className="max-h-[500px]" />
      </div>
    )
  return (<div className="w-full max-h-[500px] min-h-[300px] bg-white box-border m-3 mx-10 rounded-lg"></div>)
}

export default CategoryBanner
