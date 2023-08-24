import Link from 'next/link';
import Image from 'next/image';

import styles from './page.module.css';
import { Buttons } from '@/components';
import { worklist } from '@/utils';

interface Props {
	params: { index: string };
}

export default function DynamicWriting(props: Props) {
	const index = Number(props.params.index);
	const { category, sub, title, caption, description, preview, image, published, link, table } = worklist[index];

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

					<Buttons.TextArrow text='Where to Buy' href={link} target='_blank' />

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
				</div>
			</section>

			<section className={styles.nav}>
				{worklist[index - 1] && (
					<Link href={'/work/writing/' + (index - 1)} className={`${styles.nav_item} ${styles.nav_item_prev}`}>
						<svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className={styles.chevron}>
							<path strokeLinecap='round' strokeLinejoin='round' d='M15.75 19.5L8.25 12l7.5-7.5' />
						</svg>

						<p>{worklist[index - 1].title}</p>
					</Link>
				)}

				{worklist[index + 1] && (
					<Link href={'/work/writing/' + (index + 1)} className={`${styles.nav_item} ${styles.nav_item_next}`}>
						<p>{worklist[index + 1].title}</p>

						<svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className={styles.chevron}>
							<path strokeLinecap='round' strokeLinejoin='round' d='M8.25 4.5l7.5 7.5-7.5 7.5' />
						</svg>
					</Link>
				)}
			</section>
		</div>
	);
}
