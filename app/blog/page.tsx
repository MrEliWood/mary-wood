'use client';

import { useState, useMemo } from 'react';
import { useSelector } from 'react-redux';
import type { RootState } from '@/redux/store';

import styles from './page.module.css';
import { Blog } from '@/types';
import { Post, BlogFilterButtons, CreatePostButton, CreatePostForm } from '@/components';

export default function Blog() {
	const token = useSelector((state: RootState) => state.token.value);
	const blogFormVisible = useSelector((state: RootState) => state.blogFormVisible.value);

	const [blogs, setBlogs] = useState<Blog[]>();

	useMemo(async () => {
		const res: Response = await fetch(`${process.env.BASE_URL}/api/blog`);
		const data: Blog[] = await res.json();

		return setBlogs(data);
	}, []);

	return (
		<section className={styles.page}>
			{token && (
				<div className={styles.user_options} style={blogFormVisible ? { height: '100%' } : { height: '5%' }}>
					<div className={`${styles.resize_container} ${blogFormVisible ? styles.visible : styles.hidden}`}>
						<CreatePostForm />
					</div>

					<div className={styles.user_toolbar}>
						<BlogFilterButtons />

						<div className={styles.absolute_container}>
							<CreatePostButton />
						</div>
					</div>
				</div>
			)}

			<div className={styles.blogs}>
				{blogs ? (
					blogs?.map((blog) => {
						const key = Math.floor(Math.random() * 1000000);

						return <Post key={key} data={blog} />;
					})
				) : (
					<p>Sorry, there was an error loading the blog.</p>
				)}
			</div>
		</section>
	);
}
