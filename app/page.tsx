import Image from 'next/image';
import Link from 'next/link';

import { Buttons, Splash } from '@/components';
import { bio, truncateString } from '@/utils';
import portrait from '@/public/assets/images/portrait.png';

import styles from './page.module.css';

export default function Home() {
	const bioPreview = truncateString(bio, 318);

	return (
		<main className={styles.page}>
			<section className={styles.intro}>
				<h1>Mary Elene Wood writes literary criticism, memoir, personal essays, and short stories and recently completed a novel that is now out and about looking for a publisher.</h1>

				<h3>
					She currently teaches American literature, autobiography,
					<br /> and health humanities at the{' '}
					<Link href='https://cas.uoregon.edu/directory/english/all/mewood' target='_blank' className={styles.logo}>
						University of Oregon
					</Link>
					.
				</h3>
			</section>

			<section className={styles.about}>
				<Image src={portrait} alt='Portrait of Mary Wood.' className={styles.portrait} />
			</section>
		</main>
	);
}
