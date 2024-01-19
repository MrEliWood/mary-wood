// external
import { ReactNode } from 'react';

// style
import styles from './style.module.css';

type Props = {
	children?: ReactNode;
};

export default function ModalForm({ children }: Props) {
	return <form className={styles.form}>{children}</form>;
}
