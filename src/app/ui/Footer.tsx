const iconsUrls = ['/footerIcon1.png', '/footerIcon2.png', '/footerIcon3.png', '/footerIcon4.png', '/footerIcon5.svg']


const Footer = () => {
  return (
    <div className="h-[300px] bg-[#353332] p-9 w-full">
      <div className="h-[70px] flex justify-between ">
        <div className="h-[45px] box-border ">
          <img src="/logo.svg" className="h-full" />
        </div>
        <div className="flex justify-evenly">
          {iconsUrls.map(icon => {
            return <Icons iconUrl={icon} />
          })}
        </div>
      </div>
      <div>
      </div>
    </div>
  )
}

const Icons = ({ iconUrl }: { iconUrl: string }) => {
  return (
    <div className="h-[30px] w-[30px] mx-1">
      <img src={iconUrl} />
    </div>
  )
}

export default Footer;
