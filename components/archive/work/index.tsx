import { useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import styles from './style.module.css';
import { worklist } from '@/utils';

interface Props {
	// filter by category
	//  - scholarship
	//     - books
	//     - essays & articles
	//  - creative work
	//     - creative work
	category: string;

	// declare number of items to return
	count: number;
}

const defaultProps = {
	category: 'all',
	count: Infinity
};

export default function Work(props: Props) {
	const { category, count } = useMemo(() => props, []);

	let itemsReturned: number = 0;

	return (
		<div className={styles.page}>
			{worklist.map((work) => {
				const key1 = Math.floor(Math.random() * 1000000);

				// seperate out conditional logic
				const validCount = count && itemsReturned < count;
				const validCategory = category === 'all' || work.category === category || work.sub === category;
				const validConditions = validCount && validCategory;

				validConditions && itemsReturned++;

				return (
					validConditions && (
						<article key={key1} className={styles.work}>
							{work.image ? (
								<Link href={work.link}>
									<Image src={work.image} alt={'Cover of ' + work.title} width={300} height={300} className={styles.cover} />
								</Link>
							) : (
								<div className={styles.book_emoji}>📓</div>
							)}

							<div className={styles.details}>
								<div>
									<h2>{work.title}</h2>
									<h4>{work.caption}</h4>
								</div>

								<p>{work.description}</p>

								{work.table.length > 0 && (
									<details>
										<summary>Table of Contents</summary>
										<ol>
											{work.table.map((row, i) => {
												const key2 = Math.floor(Math.random() * 1000000);

												if (row.split(' ')[0] === 'Part') {
													return (
														<p key={key2} className={styles.heading}>
															{row}
														</p>
													);
												}

												if (row.includes('Mary')) {
													return (
														<li key={key2} className={styles.bold}>
															{row}
														</li>
													);
												}

												return <li key={key2}>{row}</li>;
											})}
										</ol>
									</details>
								)}
							</div>
						</article>
					)
				);
			})}
		</div>
	);
}

Work.defaultProps = defaultProps;
