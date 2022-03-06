import burger from '../assets/icons/burger.svg';
import Button from './shared/Button';
import Logo from './shared/Logo';

const Navigation = () => (
	<div className='flex items-center justify-between'>
		<div className='flex items-center justify-start gap-[8px]'>
			<div className='w-[35px] cursor-pointer'>
				<img src={ burger } alt='' />
			</div>
			<Logo />
		</div>
		<Button text='Become a host' type='secondary' />
	</div>
);

export default Navigation;
