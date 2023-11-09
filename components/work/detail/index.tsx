'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { Button } from '@/components';

import styles from './page.module.css';

import { Work } from '@/types';
import { truncate } from 'fs';

interface Props {
	data: Work;
}

export default function Detail(props: Props) {
	const { id, title, caption, description, preview, image, published, link, table } = props.data;
	const [descVisible, setDescVisible] = useState(false);

	return (
		<article id={id} className={styles.work}>
			{image && (
				<Link href={link} className={`${styles.cover_container} hidden_link`}>
					<Image src={image} alt='Life Writing & Schizophrenia' width={100} height={100} className={styles.cover} />
				</Link>
			)}

			<div className={styles.content}>
				<div className={styles.heading}>
					<h5 className={styles.date}>Published {published}</h5>

					<div className={styles.title}>
						<h1>{title}</h1>
						<h2>{caption.replace('\n ', '')}</h2>
					</div>
				</div>

				<hr />

				<p className={styles.description}>
					{descVisible ? (
						<>
							{description} <Button.Text onClick={() => setDescVisible(!descVisible)}>Show Less</Button.Text>
						</>
					) : (
						<>
							{preview}... <Button.Text onClick={() => setDescVisible(!descVisible)}>Read More</Button.Text>
						</>
					)}
				</p>

				{table && (
					<aside className={styles.table_container}>
						<h2 className={styles.table_title}>Table of Contents</h2>

						<hr />

						<ul className={styles.table}>
							{table.map(({ type, text }, i) => {
								const key = Math.floor(Math.random() * 1000000);

								return type === 'head' ? (
									<h5 key={key} className={styles.table_head}>
										{text}
									</h5>
								) : type === 'bold' ? (
									<li key={key} className={styles.table_bold}>
										{text}
									</li>
								) : (
									<li key={key} className={styles.table_line}>
										{text}
									</li>
								);
							})}
						</ul>
					</aside>
				)}
			</div>
		</article>
	);
}
