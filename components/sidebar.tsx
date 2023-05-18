'use client';

import { Nav } from '@/components';
import styles from './sidebar.module.css';

export default function Sidebar() {
	return (
		<aside className={styles.sidebar}>
			<Nav />
		</aside>
	);
}
