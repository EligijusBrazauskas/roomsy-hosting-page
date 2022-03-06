import logo from '../../assets/icons/logo.svg';

interface Props {
	link?: string;
	atFooter?: boolean;
}

const Logo = ({ link, atFooter }: Props) => (
	<a href={ link } className={`w-[143px] ${ !atFooter && 'hidden sm:block' }`}>
		<img src={ logo } alt='' />
	</a>
);

export default Logo;
