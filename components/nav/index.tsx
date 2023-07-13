'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import styles from './style.module.css';

export default function Nav() {
	const pathname: string = usePathname();

	return (
		<nav className={styles.nav}>
			<div className={styles.dropdown_container}>
				<p className={pathname === '/writing' || pathname === '/teaching' ? styles.active : ''}>Work</p>

				<div className={styles.dropdown}>
					<div className={styles.subnav}>
						<Link href='/writing' className={pathname === '/writing' ? styles.active : ''}>
							Writing
						</Link>
						<Link href='/teaching' className={pathname === '/teaching' ? styles.active : ''}>
							Teaching
						</Link>
					</div>
				</div>
			</div>

			<Link href='/blog'>Blog</Link>
			<Link href='/about'>About</Link>
			<Link href='/contact'>Contact</Link>
		</nav>
	);
}
