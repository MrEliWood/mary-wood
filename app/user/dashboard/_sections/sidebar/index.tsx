'use client';

// external
import { useState, useEffect } from 'react';

// internal
import { Tabs, Blogs } from './_sections';

// state
import { getState } from '@/state';

// styles
import styles from './style.module.css';

// variables
const blogsId = 'admin_section_blogs';

export default function Sidebar() {
	const [isHidden, setIsHidden] = useState(false);
	const [startPosition, setStartPosition] = useState(0);
	const [scrollPosition, setScrollPosition] = useState(0);
	const allBlogs = getState('allBlogs');

	const getBlogsElement = () => document.getElementById(blogsId);

	const handleScroll = () => {
		const element = getBlogsElement();
		if (!element) return;

		const position = element.children[0].getBoundingClientRect().top;
		setScrollPosition(position);
	};

	const initScrollPosition = () => {
		const element = getBlogsElement();
		if (!element) return;

		const position = element?.children[0]?.getBoundingClientRect().top || 0;
		setScrollPosition(position);
		setStartPosition(position);
	};

	const listenForScroll = () => {
		const element = getBlogsElement();
		if (!element) return;

		element.addEventListener('scroll', handleScroll);
		return () => element.removeEventListener('scroll', handleScroll);
	};

	useEffect(initScrollPosition, []);
	useEffect(listenForScroll, []);

	const noBlogs = !allBlogs?.drafts.length && !allBlogs?.published.length && !allBlogs?.deleted.length;
	const isScrolled = scrollPosition < startPosition;

	if (noBlogs) return <div className={`${styles.sidebar_container} ${styles.hidden}`} />;

	return (
		<div className={`${styles.sidebar_container} ${isHidden ? styles.hidden : ''}`}>
			<section className={styles.sidebar}>
				<Tabs isHidden={isHidden} setIsHidden={setIsHidden} isScrolled={isScrolled} />
				<Blogs id={blogsId} />
			</section>
		</div>
	);
}
