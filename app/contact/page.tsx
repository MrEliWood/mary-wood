import Image from 'next/image';
import Link from 'next/link';

import { links } from '@/utils';

import portrait from '@/public/assets/images/portrait-square.jpg';

import styles from './page.module.css';

export default function Blog() {
	return (
		<main className={styles.page}>
			<h1>Get in Touch</h1>

			<section className={styles.contact}>
				<Image src={portrait} alt='Portrait of Mary Wood.' className={styles.portrait_image} />

				<aside className={styles.contact_details_container}>
					<div className={styles.contact_details}>
						<Link href={links.phone} className={styles.contact_info}>
							<h3>(541) 346-3010</h3>
						</Link>

						<Link href={links.email} className={styles.contact_info}>
							<h3>mewood@uoregon.edu</h3>
						</Link>
					</div>

					<div className={styles.contact_details}>
						<Link href={links.uo} target='_blank' className={styles.contact_info_test}>
							<h3>University of Oregon</h3>
						</Link>
					</div>
				</aside>
			</section>
		</main>
	);
}
