'use client';

// external
import { useEffect } from 'react';

// internal
import { Editor, Menu, Sidebar } from './_sections';
import { setTextAreaHeight } from '@/utils';

// styles
import styles from './_styles/page.module.css';

export default function Dashboard() {
	const handleWindowResize = () => {
		const elements = document.querySelectorAll('textarea');

		for (let i = 0; i < elements.length; i++) {
			setTextAreaHeight(elements[i]);
		}
	};

	useEffect(() => {
		window.addEventListener('resize', handleWindowResize);
		return () => window.removeEventListener('resize', handleWindowResize);
	}, []);

	return (
		<main className={styles.main}>
			<Sidebar />
			<Editor />
			<Menu />
		</main>
	);
}
