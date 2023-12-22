'use client';

import { useState, useEffect } from 'react';

import { Tabs, Blogs } from './_sections';
import { Button } from '../../_components';
import { getKey } from '@/utils';

import { useSelector, useDispatch } from 'react-redux';
import type { RootState } from '@/redux/store';
import { setActiveBlog } from '@/redux/features/activeBlog';

import styles from './style.module.css';

import type { FilteredBlogs } from '@/types';

type Props = {
	blogData: FilteredBlogs;
};

export default function Sidebar({ blogData }: Props) {
	const { drafts, published, deleted } = blogData;
	const [activeTab, setActiveTab] = useState('all');
	const activeBlog = useSelector((state: RootState) => state.activeBlog.value);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(setActiveBlog(drafts[0] || published[0] || deleted[0]));
	}, []);

	return (
		<section className={styles.sidebar}>
			<Tabs activeTab={activeTab} setActiveTab={setActiveTab} />

			<Blogs activeTab={activeTab} blogData={blogData} />
		</section>
	);
}
