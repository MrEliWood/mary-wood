import Link from 'next/link';
import Image from 'next/image';

import styles from './book.module.css';
import booklist from '@/components/utils/booklist';

export default function Books({ category }: { category: string }) {
	return (
		<section className={styles.page}>
			{booklist.map((book, i) => {
				return (
					book.category === category && (
						<article key={i} className={styles.book}>
							<Link href={book.link}>
								<Image src={book.image} alt={'Cover of ' + book.title} width={300} height={300} className={styles.cover} />
							</Link>

							<div className={styles.details}>
								<div>
									<h2>{book.title}</h2>
									<h4>{book.caption}</h4>
								</div>

								<p>{book.description}</p>
							</div>
						</article>
					)
				);
			})}
		</section>
	);
}
