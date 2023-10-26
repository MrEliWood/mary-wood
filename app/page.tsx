import Image from 'next/image';
import Link from 'next/link';

import { Buttons, Splash } from '@/components';
import { bio, truncateString } from '@/utils';
import portrait from '@/public/assets/images/portrait.jpg';

import styles from './page.module.css';

export default function Home() {
	const bioPreview = truncateString(bio, 318);

	const uoLink = (
		<Link href='https://cas.uoregon.edu/directory/english/all/mewood' target='_blank' className={styles.logo}>
			University of Oregon
		</Link>
	);

	return (
		<main className={styles.page}>
			<section className={styles.intro}>
				<h1>Mary Elene Wood writes literary criticism, memoir, personal essays, and short stories and recently completed a novel that is now out and about looking for a publisher.</h1>

				<h3 className={styles.intro_caption}>Professor of Disability Studies and English at the {uoLink}.</h3>
			</section>

			<section className={styles.profile}>
				<Image src={portrait} alt='Portrait of Mary Wood.' className={styles.portrait} />

				<aside className={styles.profile_detail}>
					<div className={styles.profile_detail_tagline}>
						<p>Writer.</p>
						<p>Teacher.</p>
						<p>Scholar.</p>
					</div>

					<p>Mary lives in Oregon with her partner and two cats.</p>
				</aside>
			</section>

			<section className={styles.break}>
				<h1>One of Mary's greatest teachers was her mother, who lived and struggled with schizophrenia for over three decades.</h1>
			</section>

			<section className={styles.pillars}>
				<div className={styles.ethos}>
					<h2>Writer.</h2>

					<aside>
						<p>Mary has published short fiction and memoir in The Missouri Review, The Capra Review, Club Plum Journal, and Midway Journal.</p>
						<p>She's also published personal essays in British Journal of Medical Ethics (under pseudonym Mary E. Ladd--her grandmother's name), and as a chapter in her otherwise academic book Life Writing and Schizophrenia: Encounters at the Edge of Meaning (Brill, 2013).</p>
					</aside>
				</div>

				<div className={styles.ethos}>
					<h2>Teacher.</h2>

					<aside>
						<p>Mary teaches American literature, autobiography, and health humanities at the {uoLink}.</p>
					</aside>
				</div>

				<div className={styles.ethos}>
					<h2>Scholar.</h2>

					<aside>
						<p>In addition to Life Writing, she is the author of The Writing on the Wall: Autobiography and the Asylum (University of Illinois Press, 1994), which is still available at the usual outlets.</p>
						<p>She has also published a number of articles in academic journals on literature and mental health/illness and topics in American literary studies.</p>
					</aside>
				</div>
			</section>
		</main>
	);
}
