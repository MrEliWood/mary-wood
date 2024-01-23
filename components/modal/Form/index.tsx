// external
import { ReactNode, SyntheticEvent } from 'react';

// style
import styles from './style.module.css';

type Props = {
	onSubmit?: (event: SyntheticEvent) => Promise<void>;
	children?: ReactNode;
};

export default function Form({ onSubmit, children }: Props) {
	return (
		<form className={styles.form} onSubmit={onSubmit}>
			{children}
		</form>
	);
}
