'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

import { Nav } from '@/components';

import styles from './style.module.css';

const scrollThreshold = 60;
const headerId = 'site_header';
const captionId = 'site_header_caption_container';

export default function Header() {
	const [scrollPosition, setScrollPosition] = useState<number>(0);

	const setHeightVariable = () => {
		const htmlElement = document.querySelector('html');
		if (!htmlElement) return;

		const headerHeight = document.getElementById(headerId)?.offsetHeight;
		if (!headerHeight) return;

		const captionHeight = document.getElementById(captionId)?.offsetHeight;
		if (!captionHeight) return;

		htmlElement?.style.setProperty('--header-height', `${headerHeight}px`);
		htmlElement?.style.setProperty('--header-caption-height', `${captionHeight}px`);
	};

	const handleScroll = () => {
		const position = window.scrollY;
		setScrollPosition(position);
	};

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);
		setHeightVariable();

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<header id={headerId} className={`${styles.header} ${scrollPosition > scrollThreshold && styles.scrolled_header}`}>
			<Link href='/' className={styles.logo}>
				<h2 className={styles.site_title}>Mary Elene Wood</h2>

				<div id={captionId} className={`${styles.site_caption_container} ${scrollPosition > scrollThreshold ? styles.hidden : styles.visible}`}>
					<h5 className={styles.site_caption}>Writer.</h5>
					<h5 className={styles.site_caption}>Teacher.</h5>
					<h5 className={styles.site_caption}>Scholar.</h5>
				</div>
			</Link>

			<Nav />
		</header>
	);
}
