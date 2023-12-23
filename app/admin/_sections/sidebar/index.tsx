'use client';

import { useState, useEffect } from 'react';

import { Tabs, Blogs } from './_sections';

import { useDispatch } from 'react-redux';
import { setActiveBlog } from '@/redux/features/activeBlog';

import styles from './style.module.css';

import type { FilteredBlogs } from '@/types';

type Props = {
	blogData: FilteredBlogs;
};

const blogsId = 'admin_section_blogs';

export default function Sidebar({ blogData }: Props) {
	const [startPosition, setStartPosition] = useState(0);
	const [scrollPosition, setScrollPosition] = useState(0);
	const [activeTab, setActiveTab] = useState('all');
	const dispatch = useDispatch();

	const { drafts, published, deleted } = blogData;

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

		const position = blogsElement?.children[0].getBoundingClientRect().top || 0;
		setStartPosition(position);

		blogsElement?.addEventListener('scroll', handleScroll);

		return () => {
			blogsElement?.removeEventListener('scroll', handleScroll);
		};
	}, []);

	const isScrolled = scrollPosition < startPosition;

	console.log(startPosition, scrollPosition);

	return (
		<section className={styles.sidebar}>
			<Tabs activeTab={activeTab} setActiveTab={setActiveTab} isScrolled={isScrolled} />
			<Blogs id={blogsId} activeTab={activeTab} blogData={blogData} />
		</section>
	);
}
