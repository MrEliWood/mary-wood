'use client';

// external
import { useEffect } from 'react';
import useSWR from 'swr';

// internal
import { Editor, Menu, Sidebar } from './_sections';
import { API, setTextAreaHeight } from '@/utils';
import { setState, useDispatch } from '@/state';

// styles
import styles from './_styles/page.module.css';

// variables
const editorId = 'editor';

export default function Dashboard() {
	const dispatch = useDispatch();

	const { data, error, isLoading } = useSWR('/api/blog', API.getAllBlogs);
	dispatch(setState('setAllBlogs', data));

	const handleWindowResize = () => {
		const elements = document.querySelectorAll('textarea');

		for (let i = 0; i < elements.length; i++) {
			setTextAreaHeight(elements[i]);
		}
	};

	useEffect(() => {
		window.addEventListener('resize', handleWindowResize);

		return () => {
			window.removeEventListener('resize', handleWindowResize);
		};
	}, []);

	if (error) return <main>{error}</main>;
	if (isLoading) return <main>Loading...</main>;

	return (
		<main className={styles.main}>
			<Sidebar />
			<Editor />
			<Menu />
		</main>
	);
}
