import Image from 'next/image';

import styles from './page.module.css';
import portrait from '../../public/portrait.jpg';

export default function About() {
	// temporary placeholder text
	const placeholder = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus laboriosam perferendis fugit debitis, odit eaque ipsam sed quam magni eligendi aspernatur quos cumque fugiat consectetur, velit similique consequuntur aut enim.';

	return (
		<section className={styles.page}>
			<p>
				<Image src={portrait} alt='Portrait of Mary Wood.' className={styles.portrait} />
				{Array(10)
					.fill(placeholder)
					.map((text, i) => (
						<span key={i}>
							{text}
							<br />
							<br />
						</span>
					))}
			</p>
		</section>
	);
}
