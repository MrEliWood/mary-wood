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

export default function Dashboard() {
	const dispatch = useDispatch();

	const { data, error, isLoading } = useSWR('/api/blog', API.getAllBlogs);

	const setBlogs = () => {
		if (!data) return;

		dispatch(setState('setAllBlogs', data));

		const localBlogDraft = localStorage.getItem('Mary Wood - Unsaved Blog');
		const unsavedBlog = localBlogDraft ? JSON.parse(localBlogDraft) : null;

		const { drafts, published, deleted } = data;
		const savedBlog = drafts[0] || published[0] || deleted[0];

		dispatch(setState('setActiveBlog', unsavedBlog || savedBlog));
	};

	const handleWindowResize = () => {
		const elements = document.querySelectorAll('textarea');

		for (let i = 0; i < elements.length; i++) {
			setTextAreaHeight(elements[i]);
		}
	};

	useEffect(() => {
		setBlogs();

		window.addEventListener('resize', handleWindowResize);
		return () => window.removeEventListener('resize', handleWindowResize);
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
