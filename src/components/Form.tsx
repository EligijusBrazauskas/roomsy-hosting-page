import Checkbox from './Checkbox';
import Input from './Input';
import Button from './shared/Button';

const Form = () => (
	<form className='flex w-full flex-col gap-[34px]'>
		<div className='flex w-full flex-col'>
			<Input type='email' placeholder='Email address' isTop />
			<Input type='text' placeholder='Phone number' isBottom />
		</div>
		<div className='flex w-full items-center gap-[18px] outline-gray-borders'>
			<Checkbox />
			<span className='subtext-small'>
				I want to receive occasional insights and information from Roomsy about hosting
				and can unsubsribe any time
			</span>
		</div>
		<div className='flex w-full justify-center sm:justify-start'>
			<Button type='black' text='Sign up' isWide />
		</div>
	</form>
);

export default Form;
