'use client';

// external
import { useState, useEffect } from 'react';
import useSWR from 'swr';

// internal
import { Tabs, Blogs } from './_sections';
import { API } from '@/utils';

// state
import { getState, setState, useDispatch } from '@/state';

// styles
import styles from './style.module.css';

// variables
const blogsId = 'admin_section_blogs';

export default function Sidebar() {
	const dispatch = useDispatch();

	const { data, isLoading } = useSWR('/api/blog', API.getAllBlogs);

	const showSidebar = data?.drafts.length || data?.published.length || data?.deleted.length;

	const [noData, setNoData] = useState(false);
	const [isHidden, setIsHidden] = useState(false);
	const [startPosition, setStartPosition] = useState(0);
	const [scrollPosition, setScrollPosition] = useState(0);

	const setBlogs = () => {
		const areDrafts = data?.drafts.length;
		const arePublished = data?.drafts.length;
		const areDeleted = data?.drafts.length;

		if (!areDrafts && !arePublished && !areDeleted) {
			setIsHidden(true);
			setNoData(true);
			return;
		}

		dispatch(setState('setAllBlogs', data));

		const localBlogDraft = localStorage.getItem('Mary Wood - Unsaved Blog');
		const unsavedBlog = localBlogDraft ? JSON.parse(localBlogDraft) : null;

		const { drafts, published, deleted } = data;
		const savedBlog = drafts[0] || published[0] || deleted[0];

		dispatch(setState('setActiveBlog', unsavedBlog || savedBlog));
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

	useEffect(() => setBlogs(), [isLoading]);

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
			<section className={styles.sidebar}>
				{isLoading ? (
					<div>Loading...</div>
				) : (
					<>
						{!noData ? <Tabs isHidden={isHidden} setIsHidden={setIsHidden} isScrolled={isScrolled} /> : ''}
						<Blogs id={blogsId} />
					</>
				)}
			</section>
		</div>
	);
}
