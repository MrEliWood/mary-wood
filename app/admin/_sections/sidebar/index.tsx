'use client';

// external
import { useState, useEffect } from 'react';

// internal
import { Tabs, Blogs } from './_sections';

// state
import { getState, setState, useDispatch } from '@/state';

// styles
import styles from './style.module.css';

// variables
const blogsId = 'admin_section_blogs';

export default function Sidebar() {
	const [isHidden, setIsHidden] = useState(false);
	const [startPosition, setStartPosition] = useState(0);
	const [scrollPosition, setScrollPosition] = useState(0);

	const allBlogs = getState('allBlogs');
	const dispatch = useDispatch();

	const setActiveBlog = () => {
		const localBlogString = localStorage.getItem('Mary Wood - Unsaved Blog');
		const unsavedBlog = localBlogString ? JSON.parse(localBlogString) : null;

		const { drafts, published, deleted } = allBlogs;
		const savedBlog = drafts[0] || published[0] || deleted[0];

		const activeBlogState = setState('setActiveBlog', unsavedBlog || savedBlog);
		dispatch(activeBlogState);
	};

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

	const onPageLoad = () => {
		setActiveBlog();

		const element = document.getElementById(blogsId);
		if (!element) return;

		initScrollPosition(element);

		element.addEventListener('scroll', handleScroll);
		return () => {
			element.removeEventListener('scroll', handleScroll);
		};
	};

	useEffect(onPageLoad, []);

	const isScrolled = scrollPosition < startPosition;

	return (
		<div className={`${styles.sidebar_container} ${isHidden ? styles.hidden : ''}`}>
			<section className={styles.sidebar}>
				<Tabs isHidden={isHidden} setIsHidden={setIsHidden} isScrolled={isScrolled} />
				<Blogs id={blogsId} />
			</section>
		</div>
	);
}
