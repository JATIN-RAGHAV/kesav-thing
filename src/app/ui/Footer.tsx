import { PropsWithChildren } from "react"
import { Instagram, Facebook, Twitter, Linkedin } from 'lucide-react'

const iconsUrls = ['/footerIcon1.png', '/footerIcon2.png', '/footerIcon3.png', '/footerIcon4.png', '/footerIcon5.svg']

const footerContents = [
  {
    header: 'About Us',
    labels: [{
      lable: 'About GuptaSwitches',
      redirectsTo: '/',
    }]
  },
  {
    header: 'Our Products',
    labels: [{
      lable: 'ACB',
      redirectsTo: '/ACB',
    }, {
      lable: 'MCCB',
      redirectsTo: '/MCCB',
    }, {
      lable: 'Overload Relay',
      redirectsTo: '/OVERLOAD_RELAY',
    }, {
      lable: 'Power Contactors',
      redirectsTo: '/POWER_CONTRACTOR',
    }, {
      lable: 'Wires & Cables',
      redirectsTo: '/WIRES_AND_CABLES',
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
      lable: '+91 9717419853',
      redirectsTo: '/',
    }, {
      lable: '+91 9311440607',
      redirectsTo: '/',
    }, {
      lable: '+91 9818091111',
      redirectsTo: '/',
    }, {
      lable: 'info@guptaswitchgears.com',
      redirectsTo: 'mailto:guptaswitchgears.com',
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
        <div className="flex gap-3 justify-evenly ">
          <Instagram />
          <Twitter />
          <Linkedin />
          <Facebook />
        </div>
      </div>
      <div className="h-[0.1px] my-4 w-full bg-[#454545]"></div>
      <div className="flex ">
        <div className="flex m-1">
          {footerContents.map((block, index) => {
            return (
              <div className="w-[250px]" key={index}>
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
