import { links } from "../../data/footer-links";

const FooterMiddle = () => (
  <div className="w-full flex flex-col lg:flex-row container-inner mx-[auto] py-[18px] sm:py-[50px]">
    <div className="w-full flex gap-[49px] sm:gap-0 flex-col sm:flex-row mb-[49px] lg:mg-0">
      <div className="flex flex-col gap-[27px] flex-1 text-center sm:text-left">
        <span className="label">ABOUT</span>
        { links.about.map((link, index) => (
          <a href="" key={index}><span className="subtext hoverable">{link}</span></a>
        ))
        }
      </div>
      <div className="flex flex-col gap-[27px] flex-1 text-center sm:text-left">
        <span className="label">COMMUNITY</span>
        { links.community.map((link, index) => (
          <a href="" key={index}><span className="subtext hoverable">{link}</span></a>
        ))
        }
      </div>
    </div>
    <div className="w-full flex flex-col gap-[49px] sm:gap-0 sm:flex-row">
      <div className="flex flex-col gap-[27px] flex-1 text-center sm:text-left">
        <span className="label">HOST</span>
        { links.host.map((link, index) => (
          <a href="" key={index}><span className="subtext hoverable">{link}</span></a>
        ))
        }
      </div>
      <div className="flex flex-col gap-[27px] flex-1 text-center sm:text-left">
        <span className="label">HELP</span>
        { links.help.map((link, index) => (
          <a href="" key={index}><span className="subtext hoverable">{link}</span></a>
        ))
        }
      </div>
    </div>
  </div>
)

export default FooterMiddle;