'use client';

import { useEffect } from 'react';

import { Editor, Sidebar } from './_sections';
import { API } from '@/utils';

import { useDispatch } from 'react-redux';
import { setAllBlogs } from '@/redux';

import styles from './_styles/page.module.css';

export default async function Dashboard() {
	const allBlogs = await API.getAllBlogs();
	// const dispatch = useDispatch();

	// useEffect(() => {
	// 	dispatch(setAllBlogs(allBlogs));
	// }, []);

	return (
		<main className={styles.main}>
			<Sidebar />
			<Editor />
		</main>
	);
}
