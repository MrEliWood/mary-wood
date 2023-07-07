'use client';

import Link from 'next/link';

import styles from './style.module.css';

export default function Header() {
	return (
		<header className={styles.header}>
			<Link href='/'>
				<h2 className={styles.site_title}>Mary Elene Wood</h2>
			</Link>

			<p>Writer, Teacher, Scholar</p>
		</header>
	);
}
