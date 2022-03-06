import Form from '../components/Form';

const FormSection = () => (
	<div className='container-inner mx-[auto] flex w-full flex-col justify-between gap-[27px] py-[32px] sm:flex-row sm:py-[90px]'>
		<div className='flex w-full flex-1 flex-col gap-[27px] sm:max-w-[432px]'>
			<h1 className='text-center sm:text-left'>
				Find out more and connect with expert Hosts
			</h1>
			<span className='subtext text-center sm:text-left'>
				We’ll share more about hosting and give you access to live webinars where
				experienced hosts can answer your questions
			</span>
		</div>
		<div className='flex flex-1 justify-end gap-[27px] sm:max-w-[432px]'>
			<Form />
		</div>
	</div>
);

export default FormSection;
