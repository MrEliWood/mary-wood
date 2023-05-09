import styles from './page.module.css';

export default function Home() {
	// temporary placeholder text
	const placeholder = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus laboriosam perferendis fugit debitis, odit eaque ipsam sed quam magni eligendi aspernatur quos cumque fugiat consectetur, velit similique consequuntur aut enim.';

	return (
		<section className={styles.page}>
			<article>
				<h4>Notable Publications</h4>

				<hr />

				<div>
					<h2>Lorem Ipsum</h2>
					<p>{placeholder}</p>
				</div>

				<div>
					<h2>Dolor Sit Amet</h2>
					<p>{placeholder}</p>
				</div>
			</article>

			<article>
				<h4>Biography</h4>

				<hr />

				<div>
					<h2>Writer, Teacher, Scholar</h2>
					<p>{placeholder}</p>
				</div>
			</article>
		</section>
	);
}
