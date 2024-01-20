'use client';

// external
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

// internal
import { Nav } from '@/components';

// styles
import styles from './style.module.css';

const scrollThreshold = 60;
const headerId = 'site_header';
const captionId = 'site_header_caption_container';

export default function Header() {
	const [scrollPosition, setScrollPosition] = useState<number>(0);
	const pathname = usePathname();

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

	const isAdminPage = pathname.includes('dashboard');
	const isScrolled = scrollPosition > scrollThreshold;

	const conditionalClass = isAdminPage ? styles.hidden_header : isScrolled ? styles.scrolled_header : '';

	return (
		<header id={headerId} className={`${styles.header} ${conditionalClass}`}>
			<Link href='/' className={styles.logo}>
				<h2 className={styles.site_title}>Mary Elene Wood</h2>

				<div id={captionId} className={`${styles.site_caption_container} ${isScrolled ? styles.hidden : styles.visible}`}>
					<h5 className={styles.site_caption}>Writer.</h5>
					<h5 className={styles.site_caption}>Teacher.</h5>
					<h5 className={styles.site_caption}>Scholar.</h5>
				</div>
			</Link>

			<Nav />
		</header>
	);
}
