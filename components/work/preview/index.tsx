'use client';

import { useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { worklist } from '@/utils';

import styles from './page.module.css';

interface Props {
	index: number;
}

export default function Preview(props: Props) {
	const work = useMemo(() => worklist[props.index], []);

	return (
		<div className={styles.component}>
			{work.image ? (
				<div className={styles.image_container}>
					<Image src={work.image} alt={'Cover of ' + work.title} className={styles.image} />
				</div>
			) : (
				<i className={`fi fi-ss-book-bookmark ${styles.book_icon}`}></i>
			)}

			<div className={styles.details}>
				<h3>{work.title}</h3>
				<p>{work.caption.replace('\n', '')}</p>
			</div>
		</div>
	);
}
