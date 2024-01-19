'use client';

// external
import { useEffect } from 'react';
import useSWR from 'swr';

// internal
import { Editor, Menu, Sidebar } from './_sections';
import { API, setTextAreaHeight } from '@/utils';

// state
import { setState, useDispatch } from '@/state';

// styles
import styles from './_styles/page.module.css';

export default function Dashboard() {
	const dispatch = useDispatch();

	const { data, isLoading } = useSWR('/api/blog', API.getAllBlogs);
	dispatch(setState('setAllBlogs', data));

	const getLocalDraft = () => {
		const localBlogDraft = localStorage.getItem('Mary Wood - Unsaved Blog');
		return localBlogDraft ? JSON.parse(localBlogDraft) : null;
	};

	const setActiveBlog = () => {
		const unsavedBlog = getLocalDraft();

		if (unsavedBlog) {
			dispatch(setState('setActiveBlog', unsavedBlog));
			return;
		}

		const savedBlog = data?.drafts[0] || data?.published[0] || data?.deleted[0];

		if (savedBlog) {
			dispatch(setState('setActiveBlog', savedBlog));
			return;
		}
	};

	const handleWindowResize = () => {
		const elements = document.querySelectorAll('textarea');

		for (let i = 0; i < elements.length; i++) {
			setTextAreaHeight(elements[i]);
		}
	};

	const listenForWindowResize = () => {
		window.addEventListener('resize', handleWindowResize);
		return () => window.removeEventListener('resize', handleWindowResize);
	};

	useEffect(setActiveBlog, []);
	useEffect(listenForWindowResize, []);

	if (isLoading) return <main>Loading...</main>;

	return (
		<main className={styles.main}>
			<Sidebar />
			<Editor />
			<Menu />
		</main>
	);
}
