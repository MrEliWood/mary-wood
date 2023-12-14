import styles from './style.module.css';

interface Props {
	className?: string;
	onClick?: () => void;
	children: React.ReactNode;
}

export default function Primary({
	// prettier-ignore
	className = '',
	onClick,
	children
}: Props) {
	return (
		<button className={`${className} ${styles.button}`} onClick={onClick}>
			{children}
		</button>
	);
}
