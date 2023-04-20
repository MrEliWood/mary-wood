import Link from 'next/link';

import styles from './nav.module.css';

export default function Nav() {
	return (
		<nav className={styles.nav}>
			<Link href='/'>Home</Link>
			<Link href='/about'>About</Link>

			<div className={styles.dropdown}>
				<p className={styles.dropdown_title}>Books</p>

				<div className={styles.dropdown_content}>
					<div className={styles.subnav}>
						<Link href='/nonfiction'>Nonfiction</Link>
						<Link href='/fiction'>Fiction</Link>
						<Link href='/memoir'>Memoir</Link>
					</div>
				</div>
			</div>

			<Link href='/articles'>Articles</Link>
			<Link href='/blog'>Blog</Link>
			<Link href='/contact'>Contact</Link>
		</nav>
	);
}
