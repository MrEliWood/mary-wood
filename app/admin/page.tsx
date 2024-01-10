'use client';

import { useEffect } from 'react';
import useSWR from 'swr';

import { Editor, Sidebar } from './_sections';
import { API } from '@/utils';

import { useDispatch } from 'react-redux';
import { setAllBlogs } from '@/redux';

import styles from './_styles/page.module.css';

export default function Dashboard() {
	const { data, error, isLoading } = useSWR('/api/blog', API.getAllBlogs);
	if (error) return <main>{error}</main>;
	if (isLoading) return <main>Loading...</main>;

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(setAllBlogs(data));
	}, []);

	return (
		<main className={styles.main}>
			<Sidebar />
			<Editor />
		</main>
	);
}
