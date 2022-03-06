import styled from 'styled-components';
import Button from '../components/shared/Button';

const ImageSection = () => {
	const imgUrl = require(`../assets/images/bg-image.png`);

	return (
		<ImageWrapper
			image={imgUrl}
			className='flex h-full max-h-[549px] w-full flex-col items-center justify-center gap-[44px] py-[151px] px-[20px] text-white'
		>
			<div className='flex w-full flex-col items-center justify-center gap-[18px] text-center'>
				<h1 className='max-w-[339px]'>Start your hosting journey</h1>
				<h2>Lets's get your listing set up, together</h2>
			</div>
			<Button type='primary' text='Get started' isWide isCentered />
		</ImageWrapper>
	);
};

const ImageWrapper = styled.div<{ image: string }>`
	background-image: url(${({ image }) => image && image});
	background-size: cover;
	background-position: center;
`;

export default ImageSection;
