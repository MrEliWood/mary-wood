import Link from 'next/link';
import Image from 'next/image';

import styles from './page.module.css';

import booklist from '@/components/utils/booklist';

export default function Nonfiction() {
	// temporary placeholder text
	const placeholder = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus laboriosam perferendis fugit debitis, odit eaque ipsam sed quam magni eligendi aspernatur quos cumque fugiat consectetur, velit similique consequuntur aut enim.';

	return (
		<section className={styles.page}>
			{booklist.map((book, i) => {
				return (
					<article key={i} className={styles.book}>
						<Image src={book.image} alt='Portrait of Mary Wood.' width={300} height={300} className={styles.cover} />

						<div className={styles.details}>
							<div>
								<h2>{book.title}</h2>
								<h4>{book.caption}</h4>
							</div>

							<p>{book.description}</p>
							<Link href={book.link}>Purchase →</Link>
						</div>
					</article>
				);
			})}
		</section>
	);
}
