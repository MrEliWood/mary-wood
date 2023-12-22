// external

// internal

// style
import styles from './style.module.css';

type Props = {
	href?: string;
	style?: 'primary' | 'secondary' | 'ghost' | 'success' | 'danger';
	className?: string;
	children?: React.ReactNode;
};

export default function Button({ style = 'primary', className = '', children }: Props) {
	return <button className={`${styles.button} ${styles[style]} ${className}`}>{children}</button>;
}
