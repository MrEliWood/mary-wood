'use client';

import { useMemo } from 'react';

import { Button, Post, CreatePostForm } from '@/components';
import { API } from '@/utils';

import { useSelector, useDispatch } from 'react-redux';
import { setBlogs } from '@/redux/features/blogData';

import styles from './page.module.css';

import type { RootState } from '@/redux/store';
import { Blog } from '@/types';

export default function Blog() {
	const blogData = useSelector((state: RootState) => state.blogData.value);
	const blogFilter = useSelector((state: RootState) => state.blogFilter.value);
	const blogFormVisible = useSelector((state: RootState) => state.blogFormVisible.value);
	const token = useSelector((state: RootState) => state.token.value);
	const dispatch = useDispatch();

	useMemo(async () => {
		const data = await API.getBlogs();
		dispatch(setBlogs(data));
	}, []);

	return (
		<section className={styles.page}>
			{token && (
				<div className={styles.user_options} style={blogFormVisible ? { height: '553px' } : { height: '32px' }}>
					<div id={styles.resize_container} className={`${styles.resize_container} ${blogFormVisible ? styles.visible : styles.hidden}`}>
						<CreatePostForm />
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

						return <Post key={key} data={blog} />;
					})}

				{blogData?.published &&
					(blogFilter === 'all' || blogFilter === 'published') &&
					blogData?.published.map((blog) => {
						const key = Math.floor(Math.random() * 1000000);

						return <Post key={key} data={blog} />;
					})}

				{token &&
					blogData?.deleted &&
					(blogFilter === 'all' || blogFilter === 'deleted') &&
					blogData?.deleted.map((blog) => {
						const key = Math.floor(Math.random() * 1000000);

						return <Post key={key} data={blog} />;
					})}
			</div>
		</section>
	);
}
