// external
import { ReactNode } from 'react';

// style
import styles from './style.module.css';

type Props = {
	children?: ReactNode;
};

export default function Buttons({ children }: Props) {
	return <div className={styles.buttons}>{children}</div>;
}
