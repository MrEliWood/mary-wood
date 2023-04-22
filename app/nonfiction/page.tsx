import Link from 'next/link';

import styles from './page.module.css';

export default function Nonfiction() {
	// temporary placeholder text
	const placeholder = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus laboriosam perferendis fugit debitis, odit eaque ipsam sed quam magni eligendi aspernatur quos cumque fugiat consectetur, velit similique consequuntur aut enim.';

	return (
		<section className={styles.page}>
			<article>
				<h2>Lorem Ipsum</h2>
				<p>{placeholder}</p>
				<Link href=''>Read More →</Link>
			</article>

			<article>
				<h2>Dolor Sit Amet</h2>
				<p>{placeholder}</p>
				<Link href=''>Read More →</Link>
			</article>

			<article>
				<h2>Consectetur</h2>
				<p>{placeholder}</p>
				<Link href=''>Read More →</Link>
			</article>

			<article>
				<h2>Adipisicing Elit</h2>
				<p>{placeholder}</p>
				<Link href=''>Read More →</Link>
			</article>
		</section>
	);
}
