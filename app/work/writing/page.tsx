'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { worklist } from '@/utils';

import styles from './page.module.css';

export default function Writing() {
	const [scrollPosition, setScrollPosition] = useState<number>(0);

	// const handleScroll = () => {
	// 	const position = window.pageYOffset;
	// 	setScrollPosition(position);
	// };

	// useEffect(() => {
	// 	window.addEventListener('scroll', handleScroll);

	// 	return () => {
	// 		window.removeEventListener('scroll', handleScroll);
	// 	};
	// }, []);

	// get list of categories from the worklist
	const categoriesWithDuplicates: string[] = worklist.map((work) => work.category);

	// filter out duplicate categories
	const categories: string[] = categoriesWithDuplicates.filter((category, i) => categoriesWithDuplicates.indexOf(category) == i);

	const cats = ['books', 'essays & articles'];

	return (
		<main className={styles.page}>
			<section className={styles.category}>
				<h1 className={styles.category_heading}>Scholarship</h1>

				{cats.map((category) => {
					const key = Math.floor(Math.random() * 1000000);

					return (
						<div key={key} id={category.replaceAll(' ', '-')} className={styles.category_work}>
							{worklist.map((work, i) => {
								const key = Math.floor(Math.random() * 1000000);

								return (
									work.sub === category && (
										<div key={key} className={styles.category_item}>
											<div className={styles.category_item_image_container}>
												<Image src={work.image} alt={'Cover of ' + work.title} className={styles.category_item_image} />
											</div>

											<div className={styles.category_item_details}>
												<h3>{work.title}</h3>
												<p>{work.caption.replace('\n', '')}</p>
											</div>
										</div>
									)
								);
							})}
						</div>
					);
				})}
			</section>

			<section className={styles.category}>
				<h1 className={styles.category_heading}>Creative Work</h1>

				{cats.map((category) => {
					const key = Math.floor(Math.random() * 1000000);

					return (
						<div key={key} id={category.replaceAll(' ', '-')} className={styles.category_work}>
							{worklist.map((work, i) => {
								const key = Math.floor(Math.random() * 1000000);

								return (
									work.sub === 'creative work' && (
										<div key={key} className={styles.category_item}>
											<div className={styles.category_item_image_container}>
												<Image src={work.image} alt={'Cover of ' + work.title} className={styles.category_item_image} />
											</div>

											<div className={styles.category_item_details}>
												<h3>{work.title}</h3>
												<p>{work.caption.replace('\n', '')}</p>
											</div>
										</div>
									)
								);
							})}
						</div>
					);
				})}
			</section>
		</main>
	);
}
