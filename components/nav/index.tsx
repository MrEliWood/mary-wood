'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import styles from './style.module.css';

const navLinks = ['writing', 'teaching', 'contact'];

export default function Nav() {
	const pathname: string = usePathname();

	return (
		<nav className={styles.nav}>
			{navLinks.map((link) => {
				const key = Math.floor(Math.random() * 1000000);

				const href = '/' + link;
				const active = pathname === href;

				return (
					<Link key={key} href={href} className={`${styles.nav_link} ${active && styles.active}`}>
						{link}
					</Link>
				);
			})}
		</nav>
	);
}
