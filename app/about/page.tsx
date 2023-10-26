import Image from 'next/image';

import { bio } from '@/utils';
import portrait from '@/public/assets/images/portrait.jpg';
import book from '@/public/assets/images/blank-page.png';

import styles from './page.module.css';

export default function About() {
	return (
		<main className={styles.page}>
			<Image src={book} alt='Blank book page.' className={styles.book} />

			<div className={styles.content}>
				<h3>About the Author</h3>

				<div className={styles.portrait_frame}>
					<Image src={portrait} alt='Portrait of Mary Wood.' className={styles.portrait} />
				</div>

				<p className={styles.bio}>{bio}</p>
			</div>
		</main>
	);
}
