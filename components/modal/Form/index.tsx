// external
import { FormEvent, FormEventHandler, ReactNode, SyntheticEvent } from 'react';

// style
import styles from './style.module.css';

type Props = {
	onSubmit?: FormEventHandler<Element>;
	children?: ReactNode;
};

export default function Form({ onSubmit = () => new Promise(() => {}), children }: Props) {
	const handleFormSubmit = (event: FormEvent) => {
		event.preventDefault();
		onSubmit(event);
	};

	return (
		<form className={styles.form} onSubmit={handleFormSubmit}>
			{children}
		</form>
	);
}
