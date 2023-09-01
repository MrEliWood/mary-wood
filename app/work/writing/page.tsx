'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { Work } from '@/components';
import { worklist } from '@/utils';

import styles from './page.module.css';

const categories = [
	{ name: 'scholarship', subCategories: ['books', 'essays & articles'] },
	{ name: 'creative work', subCategories: null }
];

export default function Writing() {
	return (
		<main className={styles.page}>
			{categories.map((category) => {
				const key = Math.floor(Math.random() * 1000000);
				const { name, subCategories } = category;

				return (
					<section className={styles.category}>
						<h1 className={styles.category_heading}>{name}</h1>
					</section>
				);
			})}
		</main>
	);
}

// export default function Writing() {
// 	return (
// 		<main className={styles.page}>
// 			{categories.map((category) => {
// 				const key = Math.floor(Math.random() * 1000000);
// 				const { name, subCategories } = category;

// 				return (
// 					<section key={key} className={styles.category}>
// 						<h1 className={styles.category_heading}>{name}</h1>

// 						{!subCategories ? (
// 							<div className={styles.category_work}>
// 								{worklist.map((work, i) => {
// 									const key = Math.floor(Math.random() * 1000000);

// 									return work.sub === name && <Work.Preview key={key} index={i} />;
// 								})}
// 							</div>
// 						) : (
// 							subCategories.map((sub) => {
// 								const key = Math.floor(Math.random() * 1000000);

// 								return (
// 									<div key={key} id={sub.replaceAll(' ', '-')} className={styles.category_work}>
// 										{worklist.map((work, i) => {
// 											const key = Math.floor(Math.random() * 1000000);

// 											return work.sub === sub && <Work.Preview key={key} index={i} />;
// 										})}
// 									</div>
// 								);
// 							})
// 						)}
// 					</section>
// 				);
// 			})}
// 		</main>
// 	);
// }
