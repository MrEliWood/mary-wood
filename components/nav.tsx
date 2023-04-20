import Link from 'next/link';

import styles from './nav.module.css';

export default function Nav() {
	return (
		<nav className={styles.nav}>
			<Link href='/'>Home</Link>
			<Link href='/about'>About</Link>
		</nav>
	);
}
