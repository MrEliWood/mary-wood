import Link from 'next/link';
import { usePathname } from 'next/navigation';

import styles from './nav.module.css';

import pagelist from './utils/pagelist';

export default function Nav() {
	const pathname: string = usePathname();

	const changeFont: (e: any) => void = (e) => {
		document.documentElement.style.setProperty('--font-secondary', `var(--font-${e.target.innerHTML})`);

		if (e.target.innerHTML === 'baskerville') {
			document.documentElement.style.setProperty('--font-weight', '400');
		} else {
			document.documentElement.style.setProperty('--font-weight', '600');
		}
	};

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

			{/* TEMP FONT MENU */}
			<hr />

			<div className={`${styles.dropdown} ${styles.fonts}`}>
				<p>Fonts</p>

				<div className={styles.dropdown_content}>
					<div className={styles.subnav}>
						<p className={`${styles.font} ${styles.baskerville}`} onClick={changeFont}>
							baskerville
						</p>

						<p className={`${styles.font} ${styles.montserrat}`} onClick={changeFont}>
							montserrat
						</p>

						<p className={`${styles.font} ${styles.cormorant}`} onClick={changeFont}>
							cormorant
						</p>

						<p className={`${styles.font} ${styles.poppins}`} onClick={changeFont}>
							poppins
						</p>
					</div>
				</div>
			</div>
		</nav>
	);
}
