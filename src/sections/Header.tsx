import Button from '../components/shared/Button';
import image from '../assets/images/header-image.svg';

const Header = () => (
	<div className='container-inner mx-[auto] flex flex-col justify-between gap-[32px] pb-[24px] pt-[32px] sm:flex-row sm:pt-[122px]'>
		<div className='mb-[100px] flex w-full min-w-[240px] flex-col justify-center gap-[48px] sm:mb-0'>
			<h1 className='h1_bold text-center sm:max-w-[300px] sm:text-left'>
				A space to share, a world to gain
			</h1>
			<h2 className='text-center sm:max-w-[300px] sm:text-left'>
				Hosting can help you turn your extra space into extra income and pursue more of
				what you love.
			</h2>
			<div className='flex w-full justify-center sm:w-[auto] sm:justify-start'>
				<Button text='Get started' type='primary' isWide />
			</div>
		</div>
		<div className='relative flex h-full w-full justify-center'>
			<img
				className='absolute top-[-70px] max-h-[605px] min-w-[400px] max-w-[400px] transition-all hover:scale-[1.1] sm:left-0 sm:min-h-[605px] sm:min-w-[581px]'
				src={ image }
				alt=''
			/>
		</div>
	</div>
);

export default Header;
