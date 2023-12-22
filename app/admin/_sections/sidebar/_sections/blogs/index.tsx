'use client';

import { Text } from '@radix-ui/themes';
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
};

type BlogFilter = {
	all: BlogData[];
	published: BlogData[];
	drafts: BlogData[];
	deleted: BlogData[];
};

function Blog({ blogData }: BlogProps) {
	const { id, title, caption, text, publishedAt } = blogData;
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

				<p className={styles.date}>
					{month}
					<span>/</span>
					{day}
					<span>/</span>
					{year}
				</p>
			</div>

			<p className={styles.caption}>{caption}</p>

			<p className={styles.text}>{text}</p>
		</div>
	);
}

export default function Blogs({ activeTab, blogData }: BlogsProps) {
	const { drafts, published, deleted } = blogData;

	const filter: BlogFilter = {
		...blogData,
		all: [...drafts, ...published, ...deleted]
	};

	return (
		<div className={styles.blogs}>
			{filter[activeTab as keyof BlogFilter].map((blog) => {
				return <Blog key={getKey()} blogData={blog} />;
			})}
		</div>
	);
}
