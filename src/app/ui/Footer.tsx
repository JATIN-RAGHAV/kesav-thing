import { Children, PropsWithChildren } from "react"
import { Instagram } from 'lucide'

const iconsUrls = ['/footerIcon1.png', '/footerIcon2.png', '/footerIcon3.png', '/footerIcon4.png', '/footerIcon5.svg']

const footerContents = [
  {
    header: 'About Us',
    labels: [{
      lable: 'About GuptaSwitches',
      redirectsTo: '/',
    }, {
      lable: 'Refurbishing Story',
      redirectsTo: '/',
    }, {
      lable: 'Our Story',
      redirectsTo: '/',
    }, {
      lable: 'Affiliated Story',
      redirectsTo: '/',
    }, {
      lable: 'Referral Story',
      redirectsTo: '/',
    }]
  },
  {
    header: 'Our Products',
    labels: [{
      lable: 'Laptop',
      redirectsTo: '/',
    }, {
      lable: 'Desktop',
      redirectsTo: '/',
    }, {
      lable: 'Mini Pc',
      redirectsTo: '/',
    }, {
      lable: 'Computer',
      redirectsTo: '/',
    }, {
      lable: 'Shit House',
      redirectsTo: '/',
    }]
  },
  {
    header: 'Help',
    labels: [{
      lable: 'Contact Us',
      redirectsTo: '/',
    }, {
      lable: 'Terms of Service',
      redirectsTo: '/',
    }, {
      lable: 'Shipping Policy',
      redirectsTo: '/',
    }, {
      lable: 'Return Policy',
      redirectsTo: '/',
    }, {
      lable: 'Warrenty Policy',
      redirectsTo: '/',
    }]
  },
  {
    header: 'Contact ',
    labels: [{
      lable: '+91-6969696969 (Your Mum)',
      redirectsTo: '/',
    }, {
      lable: 'support@MyDk.cum',
      redirectsTo: '/',
    }]
  }
]

const Footer = () => {
  return (
    <div className="h-[380px] bg-[#353332] px-20 py-10 w-full text-white">
      <div className="h-[70px] flex justify-between ">
        <div className="h-[45px] box-border ">
          <img src="/logo.svg" className="h-full" />
        </div>
        <div className="flex justify-evenly">
        </div>
      </div>
      <div className="h-[0.1px] my-4 w-full bg-[#454545]"></div>
      <div className="flex ">
        <div className="flex m-1">
          {footerContents.map(block => {
            return (
              <div className="w-[250px]">
                <Heading>{block.header}</Heading>
                <div className="w-max">
                  {block.labels.map(label => {
                    return <Label redirectsTo={label.redirectsTo}>{label.lable}</Label>
                  })}
                </div>
              </div>
            )
          })}
        </div>
        <div>
          <Heading>
            Give Your Reviews
          </Heading>
          <input className="h-[35px] w-[200px] rounded-full bg-transparent border-white border outline-none px-4 font-thin"></input>
        </div>
      </div>
    </div>
  )
}

// {iconsUrls.map(icon => {
//   return <Icons iconUrl={icon} />
// })}
const Icons = ({ iconUrl }: { iconUrl: string }) => {
  return (
    <div className="h-[30px] w-[30px] mx-1">
      <img src={iconUrl} />
    </div>
  )
}

const Heading: React.FC<PropsWithChildren> = ({ children }) => {
  return <div className="font-bold w-max mb-6 text-lg">{children}</div>
}

const Label: React.FC<PropsWithChildren<{ redirectsTo: string }>> = ({ children, redirectsTo }) => {
  return <a className="block w-max group relative text-sm font-thin my-3 hover:font-bold transition-all" href={redirectsTo}>{children}
    <span className="absolute w-0 group-hover:w-full transition-all h-[1px] bg-white bottom-0 left-0"></span>
  </a>
}

export default Footer;
