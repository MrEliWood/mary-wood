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
	const allBlogs = getState('allBlogs');

	const showSidebar = allBlogs?.drafts.length || allBlogs?.published.length || allBlogs?.deleted.length;

	console.log(allBlogs);

	const [isHidden, setIsHidden] = useState(!showSidebar);
	const [startPosition, setStartPosition] = useState(0);
	const [scrollPosition, setScrollPosition] = useState(0);

	const initScrollPosition = (element: HTMLElement) => {
		const position = element?.children[0]?.getBoundingClientRect().top || 0;

		setStartPosition(position);
		setScrollPosition(position);
	};

	const handleScroll = (event: Event) => {
		const element = event.target as HTMLElement;

		const position = element.children[0].getBoundingClientRect().top;
		setScrollPosition(position);
	};

	useEffect(() => {
		const element = document.getElementById(blogsId);
		if (!element) return;

		initScrollPosition(element);

		element.addEventListener('scroll', handleScroll);
		return () => {
			element.removeEventListener('scroll', handleScroll);
		};
	}, []);

	const isScrolled = scrollPosition < startPosition;

	return (
		<div className={`${styles.sidebar_container} ${isHidden ? styles.hidden : ''}`}>
			{showSidebar ? (
				<section className={styles.sidebar}>
					<Tabs isHidden={isHidden} setIsHidden={setIsHidden} isScrolled={isScrolled} />
					<Blogs id={blogsId} />
				</section>
			) : (
				''
			)}
		</div>
	);
}
