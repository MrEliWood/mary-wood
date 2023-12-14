'use client';

import { useEffect, Dispatch, SetStateAction } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import styles from './page.module.css';

import { Work } from '@/types';

type Props = {
	data: Work;
	setVisibleWork: Dispatch<SetStateAction<string>>;
};

export default function Detail(props: Props) {
	const { data, setVisibleWork } = props;

	const { category, id, title, caption, description, image, published, link, table } = data;

	const handleScroll = () => {
		const htmlElement = document.getElementById(id);
		if (!htmlElement) return;

		const position = htmlElement.getBoundingClientRect().top;
		if (!position) return;

		const viewRange = window.innerHeight / 2;
		const isWithinRange = 0 < position && position < viewRange;

		if (isWithinRange) setVisibleWork(id);
	};

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return category === 'Creative Work' ? (
		<article id={id} className={`${styles.work} ${styles.creative}`}>
			{/* <Image src='/assets/images/blank-book.png' alt='Life Writing & Schizophrenia' width={100} height={100} className={styles.cover} /> */}

			<div className={styles.content}>
				<div className={styles.heading}>
					<h5 className={styles.date}>Published {published}</h5>

					<div className={styles.title}>
						<h1>{title}</h1>
						<h2>{caption.replace('\n ', '')}</h2>
					</div>
				</div>

				{link ? (
					<Link href={link} target='_blank'>
						{link.split('/')[2]}
					</Link>
				) : (
					''
				)}
			</div>
		</article>
	) : (
		<article id={id} className={`${styles.work} ${styles.scholarship}`}>
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

				<p className={styles.description}>{description}</p>

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
