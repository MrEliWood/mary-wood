import Link from 'next/link';
import Image from 'next/image';

import styles from './workDetails.module.css';
import { worklist } from '@/utils';

export default function BookDetails({ category }: { category: string }) {
	return (
		<div className={styles.page}>
			{worklist.map((work, i) => {
				return (
					work.sub === category && (
						<article key={i} className={styles.work}>
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
												if (row.split(' ')[0] === 'Part') {
													return (
														<>
															<p key={i}>{row}</p>
															<hr />
														</>
													);
												}

												if (row.includes('Mary')) {
													return (
														<li key={i} className={styles.bold}>
															{row}
														</li>
													);
												}

												return <li key={i}>{row}</li>;
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
