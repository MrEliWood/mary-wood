import { PropsWithChildren } from 'react';

import styles from './style.module.css';

interface Props {
	className?: string;
	onClick?: () => void;
}

export default function Primary(props: PropsWithChildren<Props>) {
	const { className, onClick, children } = props;

	return (
		<button className={`${className} ${styles.button}`} onClick={onClick}>
			{children}
		</button>
	);
}
