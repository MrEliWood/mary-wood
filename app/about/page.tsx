import Image from 'next/image';

import { bio } from '@/utils';
import portrait from '@/public/assets/images/portrait.jpg';

import styles from './page.module.css';

export default function About() {
	return (
		<section className={styles.page}>
			<p>
				<Image src={portrait} alt='Portrait of Mary Wood.' className={styles.portrait} />

				<p>{bio}</p>
			</p>
		</section>
	);
}
