import Image from 'next/image';

import { Work } from '@/components';
import { bio } from '@/utils';
import portrait from '@/public/assets/images/portrait.jpg';

import styles from './page.module.css';

export default function Home() {
	return (
		<section className={styles.page}>
			<p>
				<Image src={portrait} alt='Portrait of Mary Wood.' className={styles.portrait} />

				<p>{bio}</p>
			</p>

			<article>
				<div>
					<h3>Latest Publication</h3>
					<hr />
				</div>

				<Work category='books' count={1} />
			</article>

			<article>
				<div>
					<h3>Recent Contribution</h3>
					<hr />
				</div>

				<Work category='creative work' count={1} />
			</article>

			<article>
				<div>
					<h3>Creative Spotlight</h3>
					<hr />
				</div>

				<Work category='creative work' count={1} />
			</article>
		</section>
	);
}
