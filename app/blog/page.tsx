'use client';

import { useMemo } from 'react';

import { Button, Blog } from '@/components';
import { API } from '@/utils';

import { useSelector, useDispatch } from 'react-redux';
import { setBlogs } from '@/state/features/blogData';

import styles from './page.module.css';

import type { RootState } from '@/state/store';
import { BlogType } from '@/types';

export default function BlogPage() {
	const blogData = useSelector((state: RootState) => state.blogData.value);
	const blogFilter = useSelector((state: RootState) => state.blogFilter.value);
	const blogFormVisible = useSelector((state: RootState) => state.blogFormVisible.value);
	const token = useSelector((state: RootState) => state.token.value);
	const dispatch = useDispatch();

	useMemo(async () => {
		const data = await API.getAllBlogs();
		dispatch(setBlogs(data));
	}, []);

	return (
		<main className={styles.page}>
			{token && (
				<div className={styles.user_options} style={blogFormVisible ? { height: '553px' } : { height: '32px' }}>
					<div id={styles.resize_container} className={`${styles.resize_container} ${blogFormVisible ? styles.visible : styles.hidden}`}>
						<Blog.CreatePostForm />
					</div>

					<div className={styles.user_toolbar}>
						<Button.BlogFilter />

						<div className={styles.absolute_container}>
							<Button.BlogCreate />
						</div>
					</div>
				</div>
			)}

			<div className={styles.blogs}>
				{token &&
					blogData?.drafts &&
					(blogFilter === 'all' || blogFilter === 'drafts') &&
					blogData?.drafts.map((blog) => {
						const key = Math.floor(Math.random() * 1000000);

						return <Blog.Preview key={key} data={blog} />;
					})}

				{blogData?.published &&
					(blogFilter === 'all' || blogFilter === 'published') &&
					blogData?.published.map((blog) => {
						const key = Math.floor(Math.random() * 1000000);

						return <Blog.Preview key={key} data={blog} />;
					})}

				{token &&
					blogData?.deleted &&
					(blogFilter === 'all' || blogFilter === 'deleted') &&
					blogData?.deleted.map((blog) => {
						const key = Math.floor(Math.random() * 1000000);

						return <Blog.Preview key={key} data={blog} />;
					})}
			</div>
		</main>
	);
}
