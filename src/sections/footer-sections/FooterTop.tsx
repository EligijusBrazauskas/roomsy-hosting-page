import appstore from '../../assets/app-brands/appstore.svg';
import googleplay from '../../assets/app-brands/googleplay.svg';
import Button from '../../components/shared/Button';
import Logo from '../../components/shared/Logo';

const FooterTop = () => {
	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth'
		});
	};
	return (
		<div className='flex flex-col sm:flex-row items-center justify-between w-full py-[18px] sm:py-[36px] container-inner mx-[auto] gap-[32px] sm:gap-0'>
			<div className='flex sm:flex-col lg:flex-row items-start gap-[31px] flex-1'>
				<a href='/' className='min-w-[111px]'>
					<img src={appstore} alt='' />
				</a>
				<div className='w-[1px] h-[41px] bg-gray-borders hidden lg:block'></div>
				<a href='/' className='min-w-[111px]'>
					<img src={googleplay} alt='' />
				</a>
			</div>
      <div onClick={scrollToTop} className='cursor-pointer'>
			  <Logo atFooter/>
      </div>
			<div className='flex-1 justify-end hidden sm:flex'>
				<Button type='black' text='Become a host'/>
			</div>
		</div>
	);
};

export default FooterTop;
