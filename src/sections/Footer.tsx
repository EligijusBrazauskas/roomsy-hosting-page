import FooterBottom from './footer-sections/FooterBottom';
import FooterMiddle from './footer-sections/FooterMiddle';
import FooterTop from './footer-sections/FooterTop';

const Footer = () => (
	<div className='w-full'>
		<div className=' border-t-[1px] border-b-[1px] border-solid border-gray-borders px-[20px]'>
			<FooterTop />
		</div>
		<div className='px-[20px]'>
			<FooterMiddle />
		</div>
		<div className=' border-t-[1px] border-b-[1px] border-solid border-gray-borders px-[20px]'>
			<FooterBottom />
		</div>
	</div>
);

export default Footer;
