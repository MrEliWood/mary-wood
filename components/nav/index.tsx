'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import styles from './style.module.css';
import { pagelist } from '@/utils';

export default function Nav() {
	const pathname: string = usePathname();

	return (
		<nav className={styles.nav}>
			{pagelist.map((page, i) => {
				// start pathname
				let path = '/';

				// extend pathname, except for home, replace spaces with dashes
				if (page.name !== 'home') path += page.name.replace(' ', '-');

				if (page.children.length < 1) {
					return (
						<Link key={i} href={path} className={pathname === path ? styles.active : styles.inactive}>
							{page.name}
						</Link>
					);
				} else {
					// extend pathname for children
					path += '/';

					// define boolean for tracking active children
					let active: boolean = false;

					if (pathname === path) {
						active = true;
					} else {
						// if not active, check for active children
						for (const subpage of page.children) {
							if (pathname === path + subpage.name) active = true;
						}
					}

					return (
						<div key={i} className={styles.dropdown}>
							<Link href={path} className={active ? styles.active : styles.inactive}>
								{page.name}
							</Link>

							<div className={styles.dropdown_content}>
								<div className={styles.subnav}>
									{page.children.map((child, j) => {
										// extend pathname, replace spaces with dashes
										const childpath = path + child.name.replace(' ', '-');

										return (
											<Link key={i + '_' + j} href={childpath} className={pathname === childpath ? styles.active : styles.inactive}>
												{child.name}
											</Link>
										);
									})}
								</div>
							</div>
						</div>
					);
				}
			})}
		</nav>
	);
}
