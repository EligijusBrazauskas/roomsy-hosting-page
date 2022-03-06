interface Props {
	label: string;
	text: string;
	link?: string;
	centered?: boolean;
}

const LabelTextLink = ({ label, text, link, centered }: Props) => (
	<div
		className={ `flex flex-1 flex-col gap-[10px] text-center sm:text-left ${
			centered && 'rotate-[10deg]'
		}` }
	>
		<span className='label'>{ label }</span>
		<span className='subtext w-full text-center sm:max-w-[283px] sm:text-left'>
			{ text }
		</span>
		<a href='/' className='link'>
			{ link }
		</a>
	</div>
);

export default LabelTextLink;
