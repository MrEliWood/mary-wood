'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import styles from './style.module.css';

export default function Nav() {
	const pathname: string = usePathname();

	return (
		<nav className={styles.nav}>
			<div className={styles.dropdown_container}>
				<p className={pathname === '/work/writing' || pathname === '/work/teaching' ? styles.active : ''}>Work</p>

				<div className={styles.dropdown}>
					<div className={styles.subnav}>
						<Link href='/work/writing' className={pathname === '/work/writing' ? styles.active : ''}>
							Writing
						</Link>
						<Link href='/work/teaching' className={pathname === '/work/teaching' ? styles.active : ''}>
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
