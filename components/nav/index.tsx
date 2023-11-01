'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import styles from './style.module.css';

const navLinks = ['writing', 'teaching', 'contact'];

export default function Nav() {
	const pathname: string = usePathname();

	return (
		<nav className={styles.nav}>
			{/* <div className={styles.dropdown_container}>
				<h5 className={pathname === '/work/writing' || pathname === '/work/teaching' ? styles.active : ''}>Work</h5>

				<div className={styles.dropdown}>
					<div className={styles.subnav}>
						<Link href='/work/writing' className={pathname === '/work/writing' ? styles.active : ''}>
							<h5>Writing</h5>
						</Link>
						<Link href='/work/teaching' className={pathname === '/work/teaching' ? styles.active : ''}>
							<h5>Teaching</h5>
						</Link>
					</div>
				</div>
			</div> */}

			{navLinks.map((link) => {
				const key = Math.floor(Math.random() * 1000000);

				const href = '/' + link;
				const active = pathname === href;

				return (
					<div key={key} className={styles.nav_link_container}>
						<Link href={href} className={`${styles.nav_link} ${active && styles.active}`}>
							{link}
						</Link>
					</div>
				);
			})}
		</nav>
	);
}
