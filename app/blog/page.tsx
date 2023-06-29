'use client';

import { useState, useMemo } from 'react';
import { useSelector } from 'react-redux';
import type { RootState } from '@/redux/store';

import styles from './page.module.css';
import { Blog } from '@/types';
import { Buttons, Post, CreatePostForm } from '@/components';

type Blogs = {
	published: Blog[];
	drafts: Blog[];
	deleted: Blog[];
};

export default function Blog() {
	const blogFilter = useSelector((state: RootState) => state.blogFilter.value);
	const blogFormVisible = useSelector((state: RootState) => state.blogFormVisible.value);
	const token = useSelector((state: RootState) => state.token.value);

	const [blogs, setBlogs] = useState<Blogs>();

	const getBlogs = async () => {
		const res: Response = await fetch(`${process.env.BASE_URL}/api/blog`);
		const data: Blog[] = await res.json();

		const blogs: Blogs = {
			published: data.filter((blog) => blog.published && !blog.deleted),
			drafts: data.filter((blog) => !blog.published && !blog.deleted),
			deleted: data.filter((blog) => blog.deleted)
		};

		return setBlogs(blogs);
	};

	useMemo(getBlogs, []);

	return (
		<section className={styles.page}>
			{token && (
				<div className={styles.user_options} style={blogFormVisible ? { height: '553px' } : { height: '32px' }}>
					<div id={styles.resize_container} className={`${styles.resize_container} ${blogFormVisible ? styles.visible : styles.hidden}`}>
						<CreatePostForm />
					</div>

					<div className={styles.user_toolbar}>
						<Buttons.BlogFilterButtons />

						<div className={styles.absolute_container}>
							<Buttons.CreatePostButton />
						</div>
					</div>
				</div>
			)}

			<div className={styles.blogs}>
				{token &&
					blogs?.drafts &&
					(blogFilter === 'all' || blogFilter === 'drafts') &&
					blogs?.drafts.map((blog) => {
						const key = Math.floor(Math.random() * 1000000);

						return <Post key={key} data={blog} />;
					})}

				{blogs?.published &&
					(blogFilter === 'all' || blogFilter === 'published') &&
					blogs?.published.map((blog) => {
						const key = Math.floor(Math.random() * 1000000);

						return <Post key={key} data={blog} />;
					})}

				{token &&
					blogs?.deleted &&
					(blogFilter === 'all' || blogFilter === 'deleted') &&
					blogs?.deleted.map((blog) => {
						const key = Math.floor(Math.random() * 1000000);

						return <Post key={key} data={blog} />;
					})}
			</div>
		</section>
	);
}
