import { PropsWithChildren } from 'react';
import Link from 'next/link';

import styles from './style.module.css';

interface Props {
	text?: string;
	href?: string;
	target?: string;
}

export default function TextArrow(props: PropsWithChildren<Props>) {
	const { text = 'Read More', href = '/', target = '_self', children } = props;

	return (
		<Link href={href} target={target} className={styles.link}>
			<button className={styles.text_arrow}>
				<h5 className={styles.text_arrow_text}>{children}</h5>

				<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='currentColor' className={styles.text_arrow_arrow}>
					<path fillRule='evenodd' d='M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z' clipRule='evenodd' />
				</svg>
			</button>
		</Link>
	);
}
