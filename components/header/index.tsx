'use client';
import Link from 'next/link';

import styles from './style.module.css';

export default function Header() {
	return (
		<header className={styles.header}>
			<Link href='/' className={styles.site_title}>
				<h1>Mary Elene Wood</h1>
			</Link>

			<h4>Writer, Teacher, Scholar</h4>
		</header>
	);
}
