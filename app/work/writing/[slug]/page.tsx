'use client';

import Image from 'next/image';
import { redirect } from 'next/navigation';

import styles from './page.module.css';
import { Buttons, PageNav } from '@/components';
import { worklist } from '@/utils';

interface Props {
	params: { slug: string };
}

export default function DynamicWriting(props: Props) {
	const { slug } = props.params;

	const found = worklist.find(({ title }) => title.toLowerCase().replaceAll(' ', '-') === slug);
	if (!found) redirect('/');

	const { category, sub, title, caption, description, preview, image, published, link, table } = found;
	const index = worklist.indexOf(found);

	const buildLink = (title: string) => `/work/writing/${title.toLowerCase().replaceAll(' ', '-')}` || null;

	const prev = worklist[index - 1] || { title: '' };
	const prevText = prev.title || null;
	const prevLink = buildLink(prev.title);

	const next = worklist[index + 1] || { title: '' };
	const nextText = next.title || null;
	const nextLink = buildLink(next.title);

	const prevNav = { text: prevText, link: prevLink };
	const nextNav = { text: nextText, link: nextLink };

	return (
		<div className={styles.page}>
			<section className={styles.work}>
				{image && (
					<>
						<Image src={image} alt='Life Writing & Schizophrenia' width={100} height={100} className={styles.background} />

						<div className={styles.art}>
							<Image src={image} alt='Life Writing & Schizophrenia' width={100} height={100} className={styles.cover} />
						</div>
					</>
				)}

				<div className={styles.content}>
					<div className={styles.content_row}>
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

					<Buttons.TextArrow text='Where to Buy' href={link} target='_blank' />
				</div>
			</section>

			<PageNav prev={prevNav} next={nextNav} />
		</div>
	);
}
