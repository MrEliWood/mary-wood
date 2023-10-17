'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { Work } from '@/components';
import { worklist } from '@/utils';

import styles from './page.module.css';

export default function Writing() {
	return (
		<main className={styles.page}>
			{/* {workCategories.map(({ name }) => {
				const key = Math.floor(Math.random() * 1000000);

				return (
					<section key={key} className={styles.category}>
						<h1 className={styles.category_heading}>{name}</h1>

						<div className={styles.category_work}>
							{worklist.map((work, i) => {
								const key = Math.floor(Math.random() * 1000000);

								return (
									work.category === name && (
										<div key={key} className={`${styles.work_container} ${!work.image ? styles.blank_image : ''}`}>
											<Work.Preview key={key} index={i} />
										</div>
									)
								);
							})}
						</div>
					</section>
				);
			})} */}

			<section className={styles.category}>
				<h1 className={styles.category_heading}>Scholarship</h1>

				{worklist.map((work, i) => {
					const key = Math.floor(Math.random() * 1000000);

					return work.category === 'scholarship' && <Work.Detail key={key} index={i} />;
				})}
			</section>
		</main>
	);
}

// export default function Writing() {
// 	return (
// 		<main className={styles.page}>
// 			{categories.map((category) => {
// 				const key = Math.floor(Math.random() * 1000000);
// 				const { name, subCategories } = category;

// 				return (
// 					<section key={key} className={styles.category}>
// 						<h1 className={styles.category_heading}>{name}</h1>

// 						{!subCategories ? (
// 							<div className={styles.category_work}>
// 								{worklist.map((work, i) => {
// 									const key = Math.floor(Math.random() * 1000000);

// 									return work.sub === name && <Work.Preview key={key} index={i} />;
// 								})}
// 							</div>
// 						) : (
// 							subCategories.map((sub) => {
// 								const key = Math.floor(Math.random() * 1000000);

// 								return (
// 									<div key={key} id={sub.replaceAll(' ', '-')} className={styles.category_work}>
// 										{worklist.map((work, i) => {
// 											const key = Math.floor(Math.random() * 1000000);

// 											return work.sub === sub && <Work.Preview key={key} index={i} />;
// 										})}
// 									</div>
// 								);
// 							})
// 						)}
// 					</section>
// 				);
// 			})}
// 		</main>
// 	);
// }
