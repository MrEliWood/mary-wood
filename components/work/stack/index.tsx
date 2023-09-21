'use client';

import Link from 'next/link';
import Image from 'next/image';

import { worklist } from '@/utils';

import styles from './page.module.css';

interface Props {
	category: string;
}

export default function Stack({ category }: Props) {
	return (
		<div className={styles.component}>
			{worklist.map((work, i) => {
				const key = Math.floor(Math.random() * 1000000);

				const inlineStyles = {
					zIndex: worklist.length - i
				};

				if (work.category === category) {
					return (
						<Link key={key} href={work.navLink} className={styles.work}>
							<Image src='/assets/images/blank-spine.png' alt={'Cover of ' + work.title} width={2500} height={2500} className={styles.blank_image} style={inlineStyles} />
							<h2 className={`${styles.title} ${styles.title_cover}`}>{work.title}</h2>
							<h3 className={`${styles.title} ${styles.title_spine}`}>{work.title}</h3>
						</Link>
					);
				}
			})}
		</div>
	);
}
