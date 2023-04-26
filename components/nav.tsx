import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

import styles from './nav.module.css';

import pagelist from './utils/pagelist';

export default function Nav() {
	const [activeFont, setActiveFont] = useState({ heading: 'cormorant', body: 'avenir' });

	const pathname: string = usePathname();

	const fonts = ['cormorant', 'avenir', 'caslon', 'raleway'];

	const changeFont: (e: any) => void = (e) => {
		// set font
		if (e.target.dataset.type === 'heading') {
			document.documentElement.style.setProperty('--font-secondary', `var(--font-${e.target.innerHTML})`);
			setActiveFont({ heading: e.target.innerHTML, body: activeFont.body });

			// set weight
			if (e.target.innerHTML === 'caslon') {
				document.documentElement.style.setProperty('--font-weight', '400');
			} else {
				document.documentElement.style.setProperty('--font-weight', '600');
			}
		} else {
			document.documentElement.style.setProperty('--font-primary', `var(--font-${e.target.innerHTML})`);
			setActiveFont({ heading: activeFont.heading, body: e.target.innerHTML });
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
						<p className={styles.font_heading}>Headings</p>

						<hr />

						{fonts.map((selection, i) => {
							return (
								<p key={i} className={`${styles.font} ${styles[selection]} ${activeFont.heading === selection ? styles.font_active : styles.font_inactive}`} data-type='heading' onClick={changeFont}>
									{selection}
								</p>
							);
						})}

						<br />

						<p className={styles.font_heading}>Body</p>

						<hr />

						{fonts.map((selection, i) => {
							return (
								<p key={i} className={`${styles.font} ${styles[selection]} ${activeFont.body === selection ? styles.font_active : styles.font_inactive}`} data-type='body' onClick={changeFont}>
									{selection}
								</p>
							);
						})}
					</div>
				</div>
			</div>
		</nav>
	);
}
