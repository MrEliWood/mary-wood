import Link from 'next/link';
import Image from 'next/image';

import styles from './page.module.css';

import booklist from '@/components/utils/booklist';

export default function Books() {
	// temporary placeholder text
	const placeholder = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus laboriosam perferendis fugit debitis, odit eaque ipsam sed quam magni eligendi aspernatur quos cumque fugiat consectetur, velit similique consequuntur aut enim.';

	return (
		<section className={styles.page}>
			<article className={styles.category}>
				<div>
					<Link href='/nonfiction'>
						<h3>Nonfiction</h3>
					</Link>

					<hr />
				</div>

				{booklist.map((book, i) => {
					return (
						book.category === 'nonfiction' && (
							<Link key={i} href='/nonfiction'>
								<div className={styles.book}>
									<Image src={book.image} alt='Portrait of Mary Wood.' width={300} height={300} className={styles.cover} />

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

			<article className={styles.category}>
				<div>
					<Link href='/fiction'>
						<h3>Fiction</h3>
					</Link>

					<hr />
				</div>

				{booklist.map((book, i) => {
					return (
						book.category === 'fiction' && (
							<Link key={i} href='/fiction'>
								<div className={styles.book}>
									<Image src={book.image} alt='Portrait of Mary Wood.' width={300} height={300} className={styles.cover} />

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

			<article className={styles.category}>
				<div>
					<Link href='/memoir'>
						<h3>Memoir</h3>
					</Link>

					<hr />
				</div>

				{booklist.map((book, i) => {
					return (
						book.category === 'memoir' && (
							<Link key={i} href='/memoir'>
								<div className={styles.book}>
									<Image src={book.image} alt='Portrait of Mary Wood.' width={300} height={300} className={styles.cover} />

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
		</section>
	);
}
