import styled from 'styled-components';

interface Props {
  text: string,
  type: string,
  isWide?: boolean,
  isCentered?: boolean
}

const Button = ({ text, type, isWide, isCentered }: Props) => (
  <ButtonWrapper type={ type } className={`flex ${ isWide && 'w-full' } ${ isCentered && 'justify-center' }`}>
    <button className={`
      ' rounded-[6px] p-[15px] text-[14px] font-medium w-full sm:w-auto '
      ${ type === 'primary' && 'bg-orange-primary text-white' }
      ${ type === 'secondary' && 'bg-orange-secondary text-orange-primary' }
      ${ type === 'black' && 'bg-black text-white' }
      `}>
      <span>{ text }</span>
    </button>
  </ButtonWrapper>
)

const ButtonWrapper = styled.div<{ type: string }>`
  button {
    transition: all 200ms ease-in;

    :hover {
      ${({ type }) => type === 'primary' && 'background-color: #ff7f50'};
      ${({ type }) => type === 'secondary' && 'background-color: #ffb4aa'};
    }
  }
`
export default Button;