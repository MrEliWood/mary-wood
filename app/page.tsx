import { useMemo } from 'react';
import Image from 'next/image';

import { Buttons, Work } from '@/components';
import { bio, truncate } from '@/utils';
import portrait from '@/public/assets/images/portrait.jpg';

import styles from './page.module.css';

export default function Home() {
	const bioPreview = useMemo(() => truncate(bio, 318), []);

	return (
		<section className={styles.page}>
			<article className={styles.intro}>
				<div className={styles.bio}>
					<p>{bioPreview}</p>

					<Buttons.TextArrow text='More about Mary' link='/about' />
				</div>

				<Image src={portrait} alt='Portrait of Mary Wood.' className={styles.portrait} />
			</article>

			<article>
				<div>
					<h3>Latest Publication</h3>
					<hr />
				</div>

				<Work category='books' count={1} />

				<Buttons.TextArrow link='/writing/scholarship' />
			</article>

			<article>
				<div>
					<h3>Recent Contribution</h3>
					<hr />
				</div>

				<Work category='essays & articles' count={1} />

				<Buttons.TextArrow link='/writing/scholarship/#essays_&_articles' />
			</article>

			<article>
				<div>
					<h3>Creative Spotlight</h3>
					<hr />
				</div>

				<Work category='creative work' count={1} />

				<Buttons.TextArrow link='/writing/scholarship/#essays_&_articles' />
			</article>
		</section>
	);
}
