import Link from 'next/link';
import { usePathname } from 'next/navigation';

import styles from './nav.module.css';

import pagelist from './pagelist';

export default function Nav() {
	const pathname: string = usePathname();

	return (
		<nav className={styles.nav}>
			{pagelist.map((page) => {
				if (page.children.length < 1) {
					return (
						<Link href={page.path} className={pathname === page.path ? styles.active : styles.inactive}>
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
						<div className={styles.dropdown}>
							<Link href={page.path} className={active ? styles.active : styles.inactive}>
								{page.name}
							</Link>

							<div className={styles.dropdown_content}>
								<div className={styles.subnav}>
									{page.children.map((child) => {
										return (
											<Link href={child.path} className={pathname === child.path ? styles.active : styles.inactive}>
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
