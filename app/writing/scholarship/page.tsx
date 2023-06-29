import { useMemo } from 'react';

import { Work } from '@/components';

import styles from './page.module.css';

export default function Scholarship() {
	const categories = useMemo(() => ['books', 'essays & articles'], []);

	return (
		<section className={styles.page}>
			{categories.map((category) => {
				const key = Math.floor(Math.random() * 1000000);
				const id = category.replaceAll(' ', '_');

				return (
					<article key={key} id={id} className={styles.category}>
						<div>
							<h3 className={styles.category_title}>{category}</h3>
							<hr />
						</div>

						<Work category={category} />
					</article>
				);
			})}
		</section>
	);
}
