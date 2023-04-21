'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import Nav from './nav';
import styles from './header.module.css';

export default function Home() {
	const pathname = usePathname();

	console.log(pathname);

	return (
		<header className={styles.header}>
			<Link href='/'>
				<h1>Mary Elene Wood</h1>
			</Link>

			<h4>Writer, Teacher, Scholar</h4>
		</header>
	);
}
