// external
import { ReactNode } from 'react';

// style
import styles from './style.module.css';

type Props = {
	children?: ReactNode;
};

export default function Body({ children }: Props) {
	return <div className={styles.body}>{children}</div>;
}
