import styled from 'styled-components';
import Pagination from './Pagination';
import LabelTextLink from './shared/LabelTextLink';

interface Props {
	image: string;
	title: string;
	text: string;
	onNext: () => void;
	onPrev: () => void;
	isLastSlide?: boolean;
	isFirstSlide?: boolean;
}

const Slide = ({
	image,
	title,
	text,
	onNext,
	onPrev,
	isLastSlide,
	isFirstSlide
}: Props) => {
	const imgUrl = require(`../assets/images/slides/${ image }.png`);

	return (
		<SlideWrapper
			image={ imgUrl }
			className='absolute flex max-h-[457px] w-full min-w-[248px] justify-center rounded-[18px] px-[32px] py-[106px] transition-all sm:justify-start sm:px-[77px]'
		>
			<div className='white-card mb-4 max-h-[216px] min-w-[180px] max-w-[266px] rotate-[-10deg] rounded-[18px] bg-white py-[42px] px-[42px] transition-all sm:mb-0 sm:min-w-[208px]'>
				<LabelTextLink label={ title } text={ text } centered />
			</div>
			<div className='absolute right-[60px] bottom-[30px]'>
				<Pagination
					onNext={ onNext }
					onPrev={ onPrev }
					isLastSlide={ isLastSlide }
					isFirstSlide={ isFirstSlide }
				/>
			</div>
		</SlideWrapper>
	);
};

const SlideWrapper = styled.div<{ image: string }>`
	background-image: url(${({ image }) => image && image});
	background-size: cover;
	background-position: center;

	:hover {
		background-size: cover;

		.white-card {
			box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
			transform: rotate(-10deg) scale(1.1);
		}
	}
`;

export default Slide;
