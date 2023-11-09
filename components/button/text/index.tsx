import { PropsWithChildren } from 'react';

import styles from './style.module.css';

interface Props {
	onClick: () => void;
}

export default function TextArrow(props: PropsWithChildren<Props>) {
	const { onClick, children } = props;

	return (
		<button className={`${styles.text} button_text`} onClick={onClick}>
			{children}
		</button>
	);
}
