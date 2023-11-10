'use client';

import { useState } from 'react';

import { Work } from '@/components';
import { workData } from '@/utils';

import styles from './page.module.css';

export default function Writing() {
	const [visibleWork, setVisibleWork] = useState(workData[0].id);

	return (
		<main className={styles.page}>
			<section className={styles.category}>
				{workData.map((work) => {
					const key = Math.floor(Math.random() * 1000000);

					return work.category === 'Scholarship' && <Work.Detail key={key} data={work} setVisibleWork={setVisibleWork} />;
				})}
			</section>

			<Work.Menu visibleWork={visibleWork} setVisibleWork={setVisibleWork} />
		</main>
	);
}
