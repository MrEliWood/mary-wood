import styles from './style.module.css';

interface Props {
	onClick?: () => void;
	children: React.ReactNode;
}

export default function TextArrow({ onClick, children }: Props) {
	return (
		<button className={`${styles.text} button_text`} onClick={onClick}>
			{children}
		</button>
	);
}
