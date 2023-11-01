'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { Work } from '@/components';
import { worklist } from '@/utils';

import styles from './page.module.css';

export default function Writing() {
	return (
		<main className={styles.page}>
			<section className={styles.category}>
				<h1 className={styles.category_heading}>Scholarship</h1>

				{worklist.map((work, i) => {
					const key = Math.floor(Math.random() * 1000000);

					return work.category === 'scholarship' && <Work.Detail key={key} index={i} />;
				})}
			</section>
		</main>
	);
}
