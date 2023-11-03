import { PropsWithChildren } from 'react';

import { Button } from '@/components';

import styles from './style.module.css';

interface Props {
	title: string;
	href?: string;
	button?: string;
}

export default function Pillar(props: PropsWithChildren<Props>) {
	const { href = '', title, button, children } = props;

	return (
		<div className={styles.component}>
			<h2>{title}.</h2>

			<aside>
				{children}

				{href && button && <Button.TextArrow href={href}>{button}</Button.TextArrow>}
			</aside>
		</div>
	);
}
