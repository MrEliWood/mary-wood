'use client';

import { Work } from '@/components';
import { workData } from '@/utils';

import styles from './page.module.css';

export default function Writing() {
	return (
		<main className={styles.page}>
			<section className={styles.category}>
				{/* <h1 className={styles.category_heading}>Scholarship</h1> */}

				{workData.map((work) => {
					const key = Math.floor(Math.random() * 1000000);

					return work.category === 'scholarship' && <Work.Detail key={key} data={work} />;
				})}
			</section>

			<Work.Menu />
		</main>
	);
}
