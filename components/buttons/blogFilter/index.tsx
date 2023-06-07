'use client';

import styles from './style.module.css';

export default function BlogFilterButtons() {
	return (
		<div className={styles.button_cluster}>
			<p>All</p>
			<p>Drafts</p>
			<p>Published</p>
			<p>Deleted</p>
		</div>
	);
}
