'use client';

import Image from 'next/image';
import { redirect } from 'next/navigation';

import styles from './page.module.css';
import { Buttons, PageNav } from '@/components';
import { worklist } from '@/utils';

interface Props {
	index: number;
}

export default function DynamicWriting({ index }: Props) {
	const { category, sub, title, caption, description, preview, image, published, link, table } = worklist[index];

	return (
		<div className={styles.component}>
			{image && (
				<>
					{/* <Image src={image} alt='Life Writing & Schizophrenia' width={100} height={100} className={styles.background} /> */}
					<Image src={image} alt='Life Writing & Schizophrenia' width={100} height={100} className={styles.cover} />
				</>
			)}

			<div className={styles.content}>
				<div className={styles.heading}>
					<h1>{title}</h1>
					<h3>{caption.replace('\n ', '')}</h3>
				</div>

				<p className={styles.date}>Published {published}</p>

				<p>{description}</p>

				{table && (
					<table className={styles.table}>
						{table.map(({ type, text }, i) => {
							const key = Math.floor(Math.random() * 1000000);

							if (type === 'head') {
								return (
									<th key={key} className={styles.table_head}>
										{text}
									</th>
								);
							}

							if (i === 0) {
								return (
									<th key={key} className={styles.table_head}>
										Table of Contents
									</th>
								);
							}

							if (type === 'bold') {
								return (
									<td key={key} className={styles.table_bold}>
										{text}
									</td>
								);
							}

							return (
								<td key={key} className={styles.table_line}>
									{text}
								</td>
							);
						})}
					</table>
				)}

				<div className={styles.button_block}>
					<Buttons.TextArrow text='Where to Buy' href={link} target='_blank' />
				</div>
			</div>
		</div>
	);
}
