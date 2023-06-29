import { useMemo } from 'react';
import Link from 'next/link';

import styles from './style.module.css';

interface Props {
	text: string;
	link: string;
}

const defaultProps = {
	text: 'Read More',
	link: ''
};

export default function TextArrow(props: Props) {
	const { text, link } = useMemo(() => props, []);

	return (
		<Link href={link} className={styles.text_arrow}>
			<h5 className={styles.text_arrow_text}>{text}</h5>
			<h5 className={styles.text_arrow_arrow}>→</h5>
		</Link>
	);
}

TextArrow.defaultProps = defaultProps;
