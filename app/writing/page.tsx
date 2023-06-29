import Link from 'next/link';
import Image from 'next/image';

import styles from './page.module.css';
import { worklist } from '@/utils';

export default function Writing() {
	// get list of categories from the worklist
	const allCategories: string[] = worklist.map((work) => work.category);

	// filter out duplicate categories
	const categories: string[] = allCategories.filter((category, i) => allCategories.indexOf(category) == i);

	return (
		<section className={styles.page}>
			{categories.map((category) => {
				const key1 = Math.floor(Math.random() * 1000000);

				return (
					<article key={key1} className={styles.category}>
						<div>
							<Link href={'/writing/' + category}>
								<h4 className={styles.heading}>{category}</h4>
							</Link>

							<hr />
						</div>

						{worklist.map((work) => {
							const key2 = Math.floor(Math.random() * 1000000);

							return (
								work.category === category && (
									<Link key={key2} href={'/writing/' + category}>
										<div className={styles.work}>
											{work.image ? <Image src={work.image} alt={'Cover of ' + work.title} width={300} height={300} className={styles.cover} /> : <div className={styles.book_emoji}>📓</div>}

											<div className={styles.details}>
												<h2>{work.title}</h2>
												<p>{work.caption.replace('\n', '')}</p>
											</div>
										</div>
									</Link>
								)
							);
						})}
					</article>
				);
			})}
		</section>
	);
}
