'use client';

import Link from 'next/link';
import Image from 'next/image';

import { worklist } from '@/utils';

import styles from './page.module.css';

interface Props {
	category: string;
}

export default function Stack({ category }: Props) {
	return (
		<div className={styles.component}>
			{worklist.map((work, i) => {
				const key = Math.floor(Math.random() * 1000000);

				const inlineStyles = {
					zIndex: worklist.length - i
				};

				if (work.category === category) {
					return (
						<div key={key} className={styles.work_container} style={inlineStyles}>
							<Link href={work.navLink} className={styles.work}>
								<svg viewBox='0 0 2414 843' width={2414} height={843} xmlns='http://www.w3.org/2000/svg' className={styles.svg}>
									<image xlinkHref='/assets/images/blank-spine.png' width={2414} height={843} className={styles.book_image} />

									<g className={`${styles.title} ${styles.title_cover}`}>
										<foreignObject x='-16%' y='100%' fontSize='24' width='23%' height='100%'>
											<div className={styles.title_cover_text}>
												<h1>{work.title}</h1>
												<h4>{work.caption}</h4>
											</div>
										</foreignObject>
									</g>

									<g className={`${styles.title} ${styles.title_spine}`}>
										<foreignObject x='1%' y='44%' fontSize='24' width='66%' height='100%'>
											<div className={styles.title_spine_text}>
												<h2>{work.title}</h2>
												<h4>{work.caption}</h4>
											</div>
										</foreignObject>
									</g>
								</svg>
							</Link>
						</div>
					);
				}
			})}
		</div>
	);
}
