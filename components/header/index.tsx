'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

import { Nav } from '@/components';

import styles from './style.module.css';

export default function Header() {
	const [scrollPosition, setScrollPosition] = useState<number>(0);
	const id = 'site_header';

	const handleScroll = () => {
		const position = window.scrollY;
		setScrollPosition(position);
	};

	const setHeightVariable = () => {
		const htmlElement = document.querySelector('html');
		const headerHeight = document.getElementById(id)?.offsetHeight || 165;

		htmlElement?.style.setProperty('--header-height', `${headerHeight}px`);
	};

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);
		setHeightVariable();

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<header id={id} className={`${styles.header} ${scrollPosition > 60 && styles.scrolled_header}`}>
			<Link href='/' className={styles.site_title}>
				<h3>Mary Elene Wood</h3>

				<p className={`${styles.site_caption} ${scrollPosition > 60 && styles.hidden}`}>Writer, Teacher, Scholar</p>
			</Link>

			<Nav />
		</header>
	);
}
