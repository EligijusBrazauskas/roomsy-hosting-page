import PictureCard from '../components/PictureCard';
import { cards } from '../data/cards';

const HostingCards = () => (
	<div className='container-inner mx-[auto] flex w-full flex-col gap-[32px] sm:gap-[58px]'>
		<h1 className='w-full text-center sm:text-left'>How hosting works</h1>
		<div className='flex w-full flex-wrap justify-center gap-[18px] sm:gap-[32px] xl:justify-between xl:gap-0'>
			{cards.map(({ image, title, text }, index) => (
				<PictureCard image={image} title={title} text={text} key={index} />
			))}
		</div>
	</div>
);

export default HostingCards;
