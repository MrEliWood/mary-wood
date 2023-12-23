'use client';

import dayjs from 'dayjs';

import { useSelector, useDispatch } from 'react-redux';
import type { RootState } from '@/redux/store';
import { setActiveBlog } from '@/redux/features/activeBlog';

import { getKey } from '@/utils';

import styles from './style.module.css';

import type { BlogData, FilteredBlogs } from '@/types';

type BlogProps = {
	blogData: BlogData;
};

type BlogsProps = {
	activeTab: string;
	blogData: FilteredBlogs;
	id: string;
};

type BlogFilter = {
	all: BlogData[];
	published: BlogData[];
	drafts: BlogData[];
	deleted: BlogData[];
};

function Blog({ blogData }: BlogProps) {
	const { id, title, caption, text, published, deleted, publishedAt } = blogData;
	const activeBlog = useSelector((state: RootState) => state.activeBlog.value);
	const dispatch = useDispatch();

	const month = dayjs(publishedAt).format('MM');
	const day = dayjs(publishedAt).format('DD');
	const year = dayjs(publishedAt).format('YYYY');

	const handleClick = () => {
		dispatch(setActiveBlog(blogData));
	};

	return (
		<div className={`${styles.blog} ${id === activeBlog.id ? styles.active : ''}`} onClick={handleClick}>
			<div className={styles.row}>
				<p className={styles.title}>{title}</p>

				<div className={styles.badge}>
					{deleted ? (
						<p className={styles.deleted_badge}>Deleted</p>
					) : published ? (
						<p className={styles.date}>
							{month}
							<span>/</span>
							{day}
							<span>/</span>
							{year}
						</p>
					) : (
						<p className={styles.draft_badge}>Draft</p>
					)}
				</div>
			</div>

			<p className={styles.caption}>{caption}</p>

			<p className={styles.text}>{text}</p>
		</div>
	);
}

export default function Blogs({ id, activeTab, blogData }: BlogsProps) {
	const { drafts, published, deleted } = blogData;

	const filter: BlogFilter = {
		...blogData,
		all: [...drafts, ...published, ...deleted]
	};

	return (
		<div id={id} className={styles.blogs}>
			{filter[activeTab as keyof BlogFilter].map((blog) => {
				return <Blog key={getKey()} blogData={blog} />;
			})}
		</div>
	);
}
