'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import styles from './style.module.css';

export default function Nav() {
	const pathname: string = usePathname();

	return (
		<nav className={styles.nav}>
			<div className={styles.dropdown_container}>
				<h5 className={pathname === '/work/writing' || pathname === '/work/teaching' ? styles.active : ''}>Work</h5>

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

			<Link href='/blog'>
				<h5>Blog</h5>
			</Link>

			<Link href='/about'>
				<h5>About</h5>
			</Link>

			<Link href='/contact'>
				<h5>Contact</h5>
			</Link>
		</nav>
	);
}
