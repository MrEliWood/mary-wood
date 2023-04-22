import Link from 'next/link';

import styles from './page.module.css';

export default function Books() {
	// temporary placeholder text
	const placeholder = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus laboriosam perferendis fugit debitis, odit eaque ipsam sed quam magni eligendi aspernatur quos cumque fugiat consectetur, velit similique consequuntur aut enim.';

	return (
		<section className={styles.page}>
			<article>
				<Link href='/nonfiction'>
					<h3>Nonfiction</h3>
				</Link>

				<hr />

				<h2>Lorem Ipsum</h2>
				<p>{placeholder}</p>
				<Link href='/nonfiction'>Read More →</Link>
			</article>

			<article>
				<Link href='/fiction'>
					<h3>Fiction</h3>
				</Link>

				<hr />

				<h2>Dolor Sit Amet</h2>
				<p>{placeholder}</p>
				<Link href='/fiction'>Read More →</Link>
			</article>

			<article>
				<Link href='/memoir'>
					<h3>Memoir</h3>
				</Link>

				<hr />

				<h2>Consectetur</h2>
				<p>{placeholder}</p>
				<Link href='/memoir'>Read More →</Link>
			</article>
		</section>
	);
}
