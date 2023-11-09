'use client';

import Link from 'next/link';
import Image from 'next/image';

import { workData } from '@/utils';

import styles from './page.module.css';

interface Props {
	index: number;
}

export default function Preview({ index }: Props) {
	const { title, image } = workData[index];

	return (
		<Link href={`/work/writing/${title.toLowerCase().replaceAll(' ', '-')}`} className={styles.component}>
			{image ? (
				<Image src={image} alt={'Cover of ' + title} width={2500} height={2500} className={styles.image} />
			) : (
				<>
					{index === workData.length - 1 ? <Image src='/assets/images/blank-spine-shadow.png' alt={'Cover of ' + title} width={2500} height={2500} className={styles.blank_image_shadow} /> : <Image src='/assets/images/blank-spine.png' alt={'Cover of ' + title} width={2500} height={2500} className={styles.blank_image} />}
					<h2 className={`${styles.title} ${styles.title_cover}`}>{title}</h2>
					<h3 className={`${styles.title} ${styles.title_spine}`}>{title}</h3>
				</>
			)}

			{/* <div className={styles.details}>
				<h3>{title}</h3>
				<p>{caption.replace('\n', '')}</p>
			</div> */}
		</Link>
	);
}
