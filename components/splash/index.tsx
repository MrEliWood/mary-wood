'use client';

import Link from 'next/link';
import Image from 'next/image';

import { Buttons } from '@/components';
import { worklist } from '@/utils';
import book from '@/public/assets/images/life-writing-mockup.png';

import styles from './style.module.css';

export default function Splash() {
	const { title, caption, preview, link } = worklist[0];

	const readMoreLink = `/work/writing/${title.toLowerCase().replaceAll(' ', '-')}`;

	return (
		<section className={styles.component}>
			<Link href={link} className={styles.left}>
				<Image src={book} alt='Life Writing & Schizophrenia' className={styles.book} />
			</Link>

			<aside className={styles.right}>
				<Link href={link} className={styles.text_block}>
					<h1 className={styles.title}>{title}</h1>
					<h3 className={styles.subtitle}>{caption}</h3>
				</Link>

				<p>{preview}</p>

				<Buttons.TextArrow href={readMoreLink} />
			</aside>
		</section>
	);
}
