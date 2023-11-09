'use client';

import Link from 'next/link';

import { workData } from '@/utils';

import styles from './style.module.css';

export default function Menu() {
	return (
		<aside className={styles.component}>
			<ul className={styles.menu}>
				{workData.map((work) => {
					const key = Math.floor(Math.random() * 1000000);

					const id = work.title.toLowerCase().replaceAll(' ', '-');

					return (
						<li key={key} id={id}>
							{work.title}
						</li>
					);
				})}
			</ul>
		</aside>
	);
}
