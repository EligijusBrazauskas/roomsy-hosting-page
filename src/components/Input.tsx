import styled from 'styled-components';

interface Props {
	type: string;
	placeholder: string;
	isTop?: boolean;
	isBottom?: boolean;
}

const Input = ({ type, placeholder, isTop, isBottom }: Props) => (
	<InputWrapper isTop={isTop} isBottom={isBottom}>
		<input
			className='w-full py-[15px] px-[45px]'
			type={ type }
			placeholder={ placeholder }
		/>
	</InputWrapper>
);

const InputWrapper = styled.div<{ isTop?: boolean; isBottom?: boolean }>`
	input {
		border-left: 1px solid #cbcbcb;
		border-right: 1px solid #cbcbcb;
		border-bottom: 1px solid #cbcbcb;
		${({ isTop }) => isTop && 'border-top: 1px solid #CBCBCB'};
		${({ isTop }) => isTop && 'border-bottom: 1px solid #CBCBCB'};
		${({ isBottom }) => isBottom && 'border-bottom: 1px solid #CBCBCB'};
		${({ isTop }) => isTop && 'border-radius: 8px 8px 0 0'};
		${({ isBottom }) => isBottom && 'border-radius: 0 0 8px 8px'};
	}
`;

export default Input;
