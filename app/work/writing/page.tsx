import Link from 'next/link';
import Image from 'next/image';

import { worklist } from '@/utils';

import styles from './page.module.css';

export default function Writing() {
	// get list of categories from the worklist
	const allCategories: string[] = worklist.map((work) => work.category);

	// filter out duplicate categories
	const categories: string[] = allCategories.filter((category, i) => allCategories.indexOf(category) == i);

	const cats = ['books', 'essays & articles'];

	return (
		<main className={styles.page}>
			<section className={styles.category}>
				<h1 className={styles.category_heading}>Scholarship</h1>

				{cats.map((category) => {
					const key = Math.floor(Math.random() * 1000000);

					return (
						<div key={key} id={category.replaceAll(' ', '-')} className={styles.category_work}>
							{worklist.map((work, i) => {
								const key = Math.floor(Math.random() * 1000000);

								return (
									work.sub === category && (
										<Link key={key} href={'/work/writing/' + i} className={styles.category_item}>
											<div className={styles.category_item_image_container}>
												<Image src={work.image} alt={'Cover of ' + work.title} className={styles.category_item_image} />
											</div>

											<div className={styles.category_item_details}>
												<h3>{work.title}</h3>
												<p>{work.caption.replace('\n', '')}</p>
											</div>
										</Link>
									)
								);
							})}
						</div>
					);
				})}
			</section>

			{categories.map((category) => {
				const key1 = Math.floor(Math.random() * 1000000);

				return (
					<section key={key1} className={styles.category}>
						<h4 className={styles.heading}>{category}</h4>

						{worklist.map((work, i) => {
							const key2 = Math.floor(Math.random() * 1000000);

							return (
								work.category === category && (
									<Link key={key2} href={'/work/writing/' + i}>
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
					</section>
				);
			})}
		</main>
	);
}
