import { useMemo } from 'react';
import Link from 'next/link';

import styles from './style.module.css';

interface Props {
	text?: string;
	href?: string;
}

const defaultProps = {
	text: 'Read More',
	href: '/'
};

export default function TextArrow({ text = 'Read More', href = '/' }: Props) {
	return (
		<Link href={href} className={styles.text_arrow}>
			<button>
				<h5 className={styles.text_arrow_text}>{text}</h5>
				<h5 className={styles.text_arrow_arrow}>→</h5>
			</button>
		</Link>
	);
}
