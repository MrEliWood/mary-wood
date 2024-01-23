// external
import { ReactNode } from 'react';

// style
import styles from './style.module.css';

type Props = {
	children?: ReactNode;
};

export default function Caption({ children }: Props) {
	return <div className={styles.caption}>{children}</div>;
}
