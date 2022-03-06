import Navigation from '../components/Navigation';
import SlideSection from '../sections/SlidesSection';
import Header from '../sections/Header';
import Support from '../sections/Support';
import HostingCards from '../sections/HostingCards';
import ImageSection from '../sections/ImageSection';
import FormSection from '../sections/FormSection';
import Footer from '../sections/Footer';
import Button from '../components/shared/Button';
import { useEffect, useState } from 'react';

const LandingPage = () => {
	const [isTopButtonVisible, setIsTopButtonVisible] = useState(false);

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth'
		});
	};

	const toggleVisibility = () => {
		if (window.pageYOffset > 2600) {
			setIsTopButtonVisible(true);
		} else {
			setIsTopButtonVisible(false);
		}
	};

	useEffect(() => {
		toggleVisibility();

		window.addEventListener('scroll', toggleVisibility);

		return () => window.removeEventListener('scroll', toggleVisibility);
	}, []);

	return (
		<div className='mx-[auto] min-h-screen w-full pt-[10px]'>
			<div className='container-outer mx-[auto] h-full w-full px-[20px]'>
				<Navigation />
				<Header />
			</div>
			<SlideSection />
			<div className='container-outer mx-[auto] mb-[32px] flex h-full w-full flex-col gap-[32px] px-[20px] sm:mb-[90px] sm:gap-[58px]'>
				<Support />
				<HostingCards />
			</div>
			<ImageSection />
			<div className='container-outer mx-[auto] flex h-full w-full flex-col gap-[58px] px-[20px]'>
				<FormSection />
			</div>
			<Footer />
			<div
				onClick={ scrollToTop }
				className={ `fixed bottom-[90px] right-[20px] hidden sm:block ${
					!isTopButtonVisible && 'sm:hidden'
				}` }
			>
				<Button text='Back to top' type='black' />
			</div>
		</div>
	);
};

export default LandingPage;
