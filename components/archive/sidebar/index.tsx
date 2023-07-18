'use client';

import styles from './style.module.css';
import { Nav } from '@/components';

export default function Sidebar() {
	return (
		<aside className={styles.sidebar}>
			<Nav />
		</aside>
	);
}
