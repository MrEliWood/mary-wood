'use client';

import { useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { Buttons } from '@/components';
import { worklist } from '@/utils';
import book from '@/public/assets/images/life-writing-mockup.png';

import styles from './style.module.css';

export default function Splash() {
	// worklist index
	const i: number = useMemo(() => 0, []);

	return (
		<section className={styles.page}>
			<Link href={worklist[i].link} className={styles.left}>
				<Image src={book} alt='Life Writing & Schizophrenia' className={styles.book} />
			</Link>

			<aside className={styles.right}>
				<Link href={worklist[i].link} className={styles.text_block}>
					<h1 className={styles.title}>{worklist[i].title}</h1>
					<h3 className={styles.subtitle}>{worklist[i].caption}</h3>
				</Link>

				<p>{worklist[i].preview}</p>

				<Buttons.TextArrow href={'/work/writing/' + i} />
			</aside>
		</section>
	);
}
