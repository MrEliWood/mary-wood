import { Work } from '@/components';

import styles from './page.module.css';

export default function Scholarship() {
	return (
		<section className={styles.page}>
			<article className={styles.category}>
				<div>
					<h3>Books</h3>
					<hr />
				</div>

				<Work category='books' />
			</article>

			<article className={styles.category}>
				<div>
					<h3>Essays & Articles</h3>
					<hr />
				</div>

				<Work category='essays & articles' />
			</article>
		</section>
	);
}
