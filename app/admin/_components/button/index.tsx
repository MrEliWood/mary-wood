// external

// internal

// style
import styles from './style.module.css';

type Props = {
	href?: string;
	style?: 'solid' | 'ghost';
	type?: 'primary' | 'secondary' | 'success' | 'danger';
	className?: string;
	onClick?: () => void;
	children?: React.ReactNode;
};

export default function Button({ style = 'solid', type = 'primary', className = '', onClick, children }: Props) {
	return (
		<button className={`${styles.button} ${styles[style]} ${styles[type]} ${className}`} onClick={onClick}>
			{children}
		</button>
	);
}
