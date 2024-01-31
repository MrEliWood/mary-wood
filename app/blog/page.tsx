'use client';

// external
import useSWR from 'swr';

// internal
import { Blog } from '@/components';
import { API, getKey } from '@/utils';

// state
import { setState, useDispatch } from '@/state';

// styles
import styles from './page.module.css';

// types
import { BlogData } from '@/types';

export default function BlogPage() {
	const dispatch = useDispatch();

	const { data, error, isLoading } = useSWR('/api/blog', API.getAllBlogs);
	dispatch(setState('setAllBlogs', data));

	if (isLoading) return <main className={styles.page}>Loading...</main>;
	if (error) return <main className={styles.page}>Error: {error}</main>;

	return (
		<main className={styles.page}>
			<div className={styles.blogs}>
				{data?.published.map((blog: BlogData) => {
					return <Blog.Preview key={getKey()} blogData={blog} />;
				})}
			</div>
		</main>
	);
}
