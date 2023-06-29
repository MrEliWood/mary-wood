'use client';
import Link from 'next/link';

import styles from './style.module.css';

export default function Header() {
	return (
		<header className={styles.header}>
			<Link href='/' className={styles.site_title}>
				<h1>Mary Elene Wood</h1>
			</Link>

			<p>Writer, Teacher, Scholar</p>
		</header>
	);
}
