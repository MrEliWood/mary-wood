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
import styles from './page.module.css';
import { useRouter } from 'next/navigation';

export default function Dashboard() {
	const router = useRouter();
	const dispatch = useDispatch();

	const { data, isLoading } = useSWR('/api/blog', API.getAllBlogs);
	dispatch(setState('setAllBlogs', data));

	const checkLocalToken = () => {
		const verified = API.verifyToken();
		if (!verified) router.push('/');
	};

	const checkForUnsavedDraft = () => {
		const localBlogDraft = localStorage.getItem('Mary Wood - Unsaved Blog');
		if (!localBlogDraft) return null;

		return JSON.parse(localBlogDraft);
	};

	const checkForActiveBlog = () => {
		const localActiveBlog = localStorage.getItem('Mary Wood - Active Blog');
		if (!localActiveBlog) return null;

		return JSON.parse(localActiveBlog);
	};

	const setActiveBlog = () => {
		const unsavedBlog = checkForUnsavedDraft();
		const localBlog = checkForActiveBlog();
		const firstBlog = data?.drafts[0] || data?.published[0] || data?.deleted[0];

		const activeBlog = unsavedBlog || localBlog || firstBlog;
		if (!activeBlog) return;

		dispatch(setState('setActiveBlog', activeBlog));
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

	useEffect(checkLocalToken, []);
	useEffect(setActiveBlog, [isLoading]);
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
