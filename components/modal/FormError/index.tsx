// external
import { ReactNode } from 'react';

// style
import styles from './style.module.css';

type Props = {
	visible: boolean;
	className?: string;
	children?: ReactNode;
};

export default function FormError({ visible, className = '', children }: Props) {
	return (
		<div className={`${styles.error_accordian} ${visible ? styles.visible : ''} ${className}`}>
			<div className={styles.error}>{children}</div>
		</div>
	);
}
