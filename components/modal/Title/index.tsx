// external
import { ReactNode } from 'react';

// style
import styles from './style.module.css';

type Props = {
	children?: ReactNode;
};

export default function Title({ children }: Props) {
	return <h3 className={styles.title}>{children}</h3>;
}
