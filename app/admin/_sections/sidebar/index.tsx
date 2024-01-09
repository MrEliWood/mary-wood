'use client';

// external
import { useState, useEffect } from 'react';
import { useQuery } from 'react-query';

// internal
import { API } from '@/utils';
import { Tabs, Blogs } from './_sections';

// state
import { useSelector, useDispatch } from 'react-redux';
import type { RootState } from '@/redux/store';
import { setActiveBlog } from '@/redux';

// styles
import styles from './style.module.css';

// variables
const blogsId = 'admin_section_blogs';

export default function Sidebar() {
	const [isHidden, setIsHidden] = useState(false);
	const [startPosition, setStartPosition] = useState(0);
	const [scrollPosition, setScrollPosition] = useState(0);
	const [activeTab, setActiveTab] = useState('all');

	const { isLoading, refetch } = useQuery({
		queryKey: `allBlogs`,
		queryFn: () => API.getAllBlogs(),
		onSuccess: (response) => {
			console.log('👀', response);
		}
	});

	const allBlogs = useSelector(({ allBlogs }: RootState) => allBlogs.value);
	const dispatch = useDispatch();

	const { drafts, published, deleted } = allBlogs;

	useEffect(() => {
		dispatch(setActiveBlog(drafts[0] || published[0] || deleted[0]));
	}, []);

	const handleScroll = (event: Event) => {
		const element = event.target as HTMLElement;

		const position = element.children[0].getBoundingClientRect().top;
		setScrollPosition(position);
	};

	useEffect(() => {
		const blogsElement = document.getElementById(blogsId);

		const position = blogsElement?.children[0]?.getBoundingClientRect().top || 0;
		setStartPosition(position);
		setScrollPosition(position);

		blogsElement?.addEventListener('scroll', handleScroll);

		return () => {
			blogsElement?.removeEventListener('scroll', handleScroll);
		};
	}, []);

	const isScrolled = scrollPosition < startPosition;

	return (
		<div className={`${styles.sidebar_container} ${isHidden ? styles.hidden : ''}`}>
			<section className={styles.sidebar}>
				<Tabs activeTab={activeTab} setActiveTab={setActiveTab} isHidden={isHidden} setIsHidden={setIsHidden} isScrolled={isScrolled} />
				<Blogs id={blogsId} activeTab={activeTab} />
			</section>
		</div>
	);
}
