import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

import styles from './nav.module.css';

import pagelist from './utils/pagelist';

export default function Nav() {
	const pathname: string = usePathname();

	return (
		<nav className={styles.nav}>
			{pagelist.map((page, i) => {
				if (page.children.length < 1) {
					return (
						<Link key={i} href={page.path} className={pathname === page.path ? styles.active : styles.inactive}>
							{page.name}
						</Link>
					);
				} else {
					// define boolean for tracking active children
					let active: boolean = false;

					if (pathname === page.path) {
						active = true;
					} else {
						// if not active, check for active children
						for (const subpage of page.children) {
							if (pathname === subpage.path) active = true;
						}
					}

					return (
						<div key={i} className={styles.dropdown}>
							<Link href={page.path} className={active ? styles.active : styles.inactive}>
								{page.name}
							</Link>

							<div className={styles.dropdown_content}>
								<div className={styles.subnav}>
									{page.children.map((child, j) => {
										return (
											<Link key={i + '_' + j} href={child.path} className={pathname === child.path ? styles.active : styles.inactive}>
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
