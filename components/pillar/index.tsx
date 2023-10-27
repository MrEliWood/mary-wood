import { PropsWithChildren } from 'react';
import Link from 'next/link';

import { Button } from '@/components';

import styles from './style.module.css';

interface Props {
	title: string;
	href?: string;
	button?: string;
}

export default function Pillar(props: PropsWithChildren<Props>) {
	const { href = '', title, button, children } = props;

	const activeLinkClass = styles.title;
	const disabledLinkClass = `${activeLinkClass} ${styles.disabled}`;

	return (
		<div className={styles.component}>
			<Link href={href} className={href ? activeLinkClass : disabledLinkClass}>
				<h2>{title}.</h2>
			</Link>

			<aside>
				{children}

				{href && button && <Button.TextArrow href={href}>{button}</Button.TextArrow>}
			</aside>
		</div>
	);
}
