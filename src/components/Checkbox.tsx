import { useState } from 'react';
import styled from 'styled-components';
import check from '../assets/icons/checkmark.svg';

const Checkbox = () => {
	const [isChecked, setIsChecked] = useState(false);

	return (
		<CheckboxWrapper isChecked={isChecked}>
			<input
				onChange={() => setIsChecked((prevState) => !prevState)}
				className='h-[29px] w-[29px] rounded-[8px]'
				type='checkbox'
			/>
			<img
				className='absolute bottom-[11px] left-[5px] w-[18px]'
				src={check}
				alt=''
			/>
		</CheckboxWrapper>
	);
};

const CheckboxWrapper = styled.div<{ isChecked: boolean }>`
	position: relative;

	input {
		-webkit-appearance: none;
		border: 1px solid #cbcbcb;

		:checked {
			background-color: black;
		}
	}

	img {
		pointer-events: none;
		filter: invert(100%) sepia(100%) saturate(0%) hue-rotate(288deg) brightness(102%) contrast(102%);
		${({ isChecked }) => !isChecked && 'display: none'}
	}
`;

export default Checkbox;
