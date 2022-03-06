import prev from '../assets/icons/chevron-prev.svg';
import next from '../assets/icons/chevron-next.svg';

interface Props {
	onNext: () => void;
	onPrev: () => void;
	isLastSlide?: boolean;
	isFirstSlide?: boolean;
}

const Pagination = ({ onNext, onPrev, isLastSlide, isFirstSlide }: Props) => (
	<div className='flex gap-[18px]'>
		{!isFirstSlide && (
			<button
				onClick={onPrev}
				className='flex h-[59px] w-[59px] items-center justify-center rounded-[50%] bg-white py-[22px] px-[24px] transition-all hover:scale-[1.05] hover:bg-gray-bg'
			>
				<img src={prev} alt='' />
			</button>
		)}
		{!isLastSlide && (
			<button
				onClick={onNext}
				className='flex h-[59px] w-[59px] items-center justify-center rounded-[50%] bg-white py-[22px] px-[24px] transition-all hover:scale-[1.05] hover:bg-gray-bg'
			>
				<img src={next} alt='' />
			</button>
		)}
	</div>
);

export default Pagination;
