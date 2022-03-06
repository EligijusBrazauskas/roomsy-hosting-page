import { useEffect, useState } from 'react';
import LabelTextLink from '../components/shared/LabelTextLink';
import Slide from '../components/Slide';
import { slides } from '../data/slides';

const SlidesSection = () => {
	const [activeIndex, setActiveIndex] = useState(0);
	const [activeSlide, setActiveSlide] = useState(slides[activeIndex]);
	const [isLastSlide, setIsLastSlide] = useState(false);
	const [isFirstSlide, setIsFirstSlide] = useState(true);

	const toggleNextSlide = () => {
		if (activeIndex < slides.length - 1) {
			setActiveIndex((prevState) => prevState + 1);
		}
	};

	const togglePrevSlide = () => {
		if (activeIndex > 0) {
			setActiveIndex((prevState) => prevState - 1);
		}
	};

	useEffect(() => {
		setActiveSlide(slides[activeIndex]);
		setIsLastSlide(false);

		if (activeIndex === 0) {
			setIsFirstSlide(true);
		} else {
			setIsFirstSlide(false);
		}

		if (activeIndex === slides.length - 1) {
			setIsLastSlide(true);
		} else {
			setIsLastSlide(false);
		}
	}, [activeIndex]);

	return (
		<div className='mt-[160px] bg-gray-bg py-[206px] px-[20px] sm:mt-0'>
			<div className='container-inner mx-[auto] flex flex-col gap-[41px]'>
				<h1 className='w-full text-center sm:max-w-[320px] sm:text-left'>
					Your next chapter, made possible by Host<span className='itallic'>ing</span>
				</h1>
				<div className='flex flex-col gap-[32px] sm:flex-row'>
					<LabelTextLink
						label="Welcome, what's next"
						text='Enjoy the flexibility of being your own boss, earn extra income and make lifelong connections through hosting'
						link='Explore the world of hosting'
					/>
					<LabelTextLink
						label="Welcome, what's next"
						text='Enjoy the flexibility of being your own boss, earn extra income and make lifelong connections through hosting'
						link='Explore the world of hosting'
					/>
				</div>
			</div>
			<div className='container-outer relative mx-[auto] mt-[32px] h-full w-full sm:mt-[90px]'>
				<Slide
					image={ activeSlide.image }
					title={ activeSlide.title }
					text={ activeSlide.text }
					onNext={ toggleNextSlide }
					onPrev={ togglePrevSlide }
					isLastSlide={ isLastSlide }
					isFirstSlide={ isFirstSlide }
				/>
			</div>
		</div>
	);
};

export default SlidesSection;
