'use client';

import { useState } from 'react';

import { Work } from '@/components';
import { workData } from '@/utils';

import styles from './page.module.css';

export default function Writing() {
	const [visibleWork, setVisibleWork] = useState(workData[0].id);

	return (
		<main className={styles.page}>
			<div className={styles.work}>
				<section className={`${styles.category} ${styles.scholarship}`}>
					{workData.map((work) => {
						const key = Math.floor(Math.random() * 1000000);

						return work.category === 'Scholarship' && <Work.Detail key={key} data={work} setVisibleWork={setVisibleWork} />;
					})}
				</section>

				<section className={`${styles.category} ${styles.creative}`}>
					{workData.map((work) => {
						const key = Math.floor(Math.random() * 1000000);

						return work.category === 'Creative Work' && <Work.Detail key={key} data={work} setVisibleWork={setVisibleWork} />;
					})}
				</section>
			</div>

			<Work.Menu visibleWork={visibleWork} setVisibleWork={setVisibleWork} />
		</main>
	);
}
