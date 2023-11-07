'use client';

import Image from 'next/image';

import { Button } from '@/components';
import { worklist } from '@/utils';

import styles from './page.module.css';

export default function Writing() {
	return (
		<main className={styles.page}>
			<section className={styles.category}>
				{/* <h1 className={styles.category_heading}>Scholarship</h1> */}

				{worklist.map((work, i) => {
					const { category, sub, title, caption, description, preview, image, published, link, table } = work;
					const key = Math.floor(Math.random() * 1000000);

					const id = 'writing_work_' + i;

					return (
						category === 'scholarship' && (
							<article id={id} className={styles.work}>
								{image && <Image src={image} alt='Life Writing & Schizophrenia' width={100} height={100} className={styles.cover} />}

								<div className={styles.content}>
									<div className={styles.heading}>
										<h5 className={styles.date}>Published {published}</h5>

										<div className={styles.title}>
											<h1>{title}</h1>
											<h2>{caption.replace('\n ', '')}</h2>
										</div>
									</div>

									<hr />

									<p className={styles.description}>{description}</p>

									{table && (
										<aside className={styles.table_container}>
											<h2 className={styles.table_title}>Table of Contents</h2>

											<hr />

											<ul className={styles.table}>
												{table.map(({ type, text }, i) => {
													const key = Math.floor(Math.random() * 1000000);

													return type === 'head' ? (
														<h5 key={key} className={styles.table_head}>
															{text}
														</h5>
													) : type === 'bold' ? (
														<li key={key} className={styles.table_bold}>
															{text}
														</li>
													) : (
														<li key={key} className={styles.table_line}>
															{text}
														</li>
													);
												})}
											</ul>
										</aside>
									)}

									<div className={styles.button_block}>
										<Button.TextArrow href={link} target='_blank'>
											Where to Buy
										</Button.TextArrow>
									</div>
								</div>
							</article>
						)
					);
				})}
			</section>
		</main>
	);
}
