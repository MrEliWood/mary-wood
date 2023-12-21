// external
import Link from 'next/link';
import { Button } from '../../_components';

// internal
import { getKey } from '@/utils';

// style
import styles from './style.module.css';

export default function Header() {
	return (
		<header className={styles.header}>
			<h2 className={styles.title}>MW</h2>

			<nav className={styles.nav}>
				<Link href='/admin/cpw' className='hidden_link'>
					<Button>Change Password</Button>
				</Link>

				<Button>Logout</Button>
			</nav>
		</header>
	);
}
