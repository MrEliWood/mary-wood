'use client';

import Link from 'next/link';
import Image from 'next/image';

import { worklist } from '@/utils';

import styles from './page.module.css';

interface Props {
	index: number;
}

export default function Preview(props: Props) {
	const work = worklist[props.index];

	return (
		<Link href={`/work/writing/${work.title.toLowerCase().replaceAll(' ', '-')}`} className={styles.component}>
			{work.image ? <Image src={work.image} alt={'Cover of ' + work.title} width={100} height={100} className={styles.image} /> : <h1>{work.title}</h1>}

			{/* <div className={styles.details}>
				<h3>{work.title}</h3>
				<p>{work.caption.replace('\n', '')}</p>
			</div> */}
		</Link>
	);
}
