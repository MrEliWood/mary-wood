'use client';

import { useState, useEffect, UIEvent } from 'react';
import useSWR from 'swr';

import { Editor, Menu, Sidebar } from './_sections';
import { API } from '@/utils';

import { useDispatch } from 'react-redux';
import { setAllBlogs } from '@/redux';

import styles from './_styles/page.module.css';

const editorId = 'editor';

export default function Dashboard() {
	const [startPosition, setStartPosition] = useState(0);
	const [scrollPosition, setScrollPosition] = useState(0);
	const dispatch = useDispatch();

	const { data, error, isLoading } = useSWR('/api/blog', API.getAllBlogs);

	dispatch(setAllBlogs(data));

	const handleScroll = (event: UIEvent<HTMLElement>) => {
		const element = event.target as HTMLElement;

		const position = element.children[0].getBoundingClientRect().top;
		setScrollPosition(position);
	};

	// useEffect(() => {
	// 	const sectionElement = document.getElementById(editorId);

	// 	const position = sectionElement?.children[0].getBoundingClientRect().top || 0;
	// 	setStartPosition(position);
	// 	setScrollPosition(position);

	// 	sectionElement?.addEventListener('scroll', handleScroll);

	// 	return () => {
	// 		sectionElement?.removeEventListener('scroll', handleScroll);
	// 	};
	// }, []);

	const editorScrolled = scrollPosition < startPosition;

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
