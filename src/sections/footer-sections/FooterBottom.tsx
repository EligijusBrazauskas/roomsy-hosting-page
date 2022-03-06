import instagram from '../../assets/app-brands/instagram.svg'
import twitter from '../../assets/app-brands/twitter.svg'
import facebook from '../../assets/app-brands/facebook.svg'

const FooterBottom = () => (
  <div className="w-full flex flex-col sm:flex-row gap-[18px] items-center justify-between py-[21px] container-inner mx-[auto]">
    <div className='flex items-center gap-[24px] flex-col xs:flex-row'>
      <span className="subtext">&copy; 2022 Roomsy, Inc.</span>
      <div className='flex items-center gap-[24px]'>
        <a href="/"><span className="subtext hoverable">Privacy</span></a>
        <div className="w-[2px] h-[2px] bg-gray-text rounded-[50%]"></div>
        <a href="/"><span className="subtext hoverable">Terms</span></a>
        <div className="w-[2px] h-[2px] bg-gray-text rounded-[50%]"></div>
        <a href="/"><span className="subtext hoverable">Sitemap</span></a>
      </div>
    </div>
    <div className='flex items-center gap-[29px]'>
      <a href='/'>
        <img src={instagram} alt="instagram" />
      </a>
      <a href='/'>
        <img src={twitter} alt="twitter" />
      </a>
      <a href='/'>
        <img src={facebook} alt="facebook" />
      </a>
    </div>
  </div>
)

export default FooterBottom;