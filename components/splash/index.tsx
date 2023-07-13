'use client';

import Link from 'next/link';
import Image from 'next/image';

import { Buttons } from '@/components';
import book from '@/public/assets/images/life-writing-mockup.png';

import styles from './style.module.css';

export default function Splash() {
	return (
		<main className={styles.main}>
			<section className={styles.left}>
				<Image src={book} alt='Life Writing & Schizophrenia' className={styles.book} />
			</section>

			<section className={styles.right}>
				<span className={styles.text_block}>
					<h1 className={styles.title}>Life Writing and Schizophrenia</h1>
					<h3 className={styles.subtitle}>Encounters at the Edge of Meaning</h3>
				</span>

				<p>How do you write your life story when readers expect you not to make sense? How do you write a case history that makes sense when, face to face with schizophrenia, your ability to tell a diagnostic story begins to fall apart?</p>

				<Buttons.TextArrow />
			</section>
		</main>
	);
}
