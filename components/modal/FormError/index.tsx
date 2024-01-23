// external
import { ReactNode } from 'react';

// style
import styles from './style.module.css';

type Props = {
	visible: boolean;
	children?: ReactNode;
};

export default function FormError({ visible, children }: Props) {
	return (
		<div className={`${styles.error_accordian} ${visible ? styles.visible : ''}`}>
			<div className={styles.error}>{children}</div>
		</div>
	);
}
