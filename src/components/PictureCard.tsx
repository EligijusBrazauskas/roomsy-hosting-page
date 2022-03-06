interface Props {
	image: string;
	title: string;
	text: string;
}

const PictureCard = ({ image, title, text }: Props) => {
	const imgUrl = require(`../assets/images/cards/${ image }.png`);

	return (
		<div className='sm:rounded-0 flex flex-1 cursor-pointer flex-col justify-center gap-[20px] rounded-[18px] bg-gray-bg p-[20px] shadow-regular transition-all hover:scale-[1.05] sm:max-w-[246px] sm:gap-[8px] sm:bg-transparent sm:p-0 sm:shadow-none sm:hover:scale-[1.1]'>
			<div className='mx-auto h-[169px] w-[246px] rounded-[8px] sm:mx-0'>
				<img src={ imgUrl } alt='' />
			</div>
			<h2 className='card-title text-center sm:text-left'>{ title }</h2>
			<span className='subtext-regular text-center sm:text-left'>{ text }</span>
		</div>
	);
};

export default PictureCard;
