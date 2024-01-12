'use client';

// external
import dayjs from 'dayjs';

// internal
import { getKey } from '@/utils';

// state
import { getState, setState, useDispatch } from '@/states';

// styles
import styles from './style.module.css';

// types
import type { BlogData, FilteredBlogs } from '@/types';

type BlogProps = {
	blogData: BlogData;
};

type BlogsProps = {
	id: string;
};

type BlogFilter = {
	all: BlogData[];
	published: BlogData[];
	drafts: BlogData[];
	deleted: BlogData[];
};

function Blog({ blogData }: BlogProps) {
	const activeBlog = getState('activeBlog');
	const dispatch = useDispatch();

	const { id, title, caption, text, published, deleted, publishedAt } = blogData;

	const month = dayjs(publishedAt).format('MM');
	const day = dayjs(publishedAt).format('DD');
	const year = dayjs(publishedAt).format('YYYY');
	const delineator = <span>/</span>;

	const handleClick = () => {
		dispatch(setState('setActiveBlog', blogData));
	};

	return (
		<div className={`${styles.blog} ${id === activeBlog.id ? styles.active : ''}`} onClick={handleClick}>
			<div className={styles.row}>
				<p className={styles.title}>{title}</p>

				<div className={styles.badge_container}>
					{deleted ? (
						<p className={`${styles.badge} ${styles.deleted}`}>Deleted</p>
					) : published ? (
						<p className={`${styles.badge} ${styles.published}`}>
							{month}
							{delineator}
							{day}
							{delineator}
							{year}
						</p>
					) : (
						<p className={`${styles.badge} ${styles.draft}`}>Draft</p>
					)}
				</div>
			</div>

			<p className={styles.caption}>{caption}</p>

			<p className={styles.text}>{text}</p>
		</div>
	);
}

export default function Blogs({ id }: BlogsProps) {
	const activeTab = getState('activeTab');
	const allBlogs = getState('allBlogs');

	const { drafts, published, deleted } = allBlogs;

	const filter: BlogFilter = {
		...allBlogs,
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
