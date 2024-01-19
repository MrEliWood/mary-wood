// external
import { MouseEventHandler } from 'react';

// internal

// style
import styles from './style.module.css';

type Props = {
	href?: string;
	style?: 'solid' | 'ghost';
	type?: 'primary' | 'secondary' | 'success' | 'danger';
	name?: string;
	className?: string;
	onClick?: MouseEventHandler<HTMLButtonElement>;
	children?: React.ReactNode;
};

export default function Button({ style = 'solid', type = 'primary', name = '', className = '', onClick, children }: Props) {
	return (
		<button name={name} className={`${styles.button} ${styles[style]} ${styles[type]} ${className}`} onClick={onClick}>
			{children}
		</button>
	);
}
