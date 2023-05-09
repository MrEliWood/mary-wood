import Link from 'next/link';
import Image from 'next/image';

import styles from './page.module.css';
import booklist from '@/components/utils/booklist';

export default function Writing() {
	// get list of categories from the booklist
	const allCategories: string[] = booklist.map((book) => book.category);

	// filter out duplicate categories
	const categories: string[] = allCategories.filter((category, i) => allCategories.indexOf(category) == i);

	return (
		<section className={styles.page}>
			{categories.map((category, i) => {
				return (
					<article key={i} className={styles.category}>
						<div>
							<Link href={'/' + category}>
								<h4 className={styles.heading}>{category}</h4>
							</Link>

							<hr />
						</div>

						{booklist.map((book, j) => {
							return (
								book.category === category && (
									<Link key={i * j} href={'/' + category}>
										<div className={styles.book}>
											<Image src={book.image} alt={'Cover of ' + book.title} width={300} height={300} className={styles.cover} />

											<div className={styles.details}>
												<h2>{book.title}</h2>
												<p>{book.caption.replace('\n', '')}</p>
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
