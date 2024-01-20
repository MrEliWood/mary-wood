// external
import { ReactNode } from 'react';

// style
import styles from './style.module.css';

type Props = {
	error: boolean;
	children?: ReactNode;
};

export default function FormError({ error, children }: Props) {
	return (
		<div className={`${styles.error_accordian} ${error ? styles.visible : ''}`}>
			<div className={styles.error}>{children}</div>
		</div>
	);
}
