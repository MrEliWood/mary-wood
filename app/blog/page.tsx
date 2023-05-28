'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import dayjs from 'dayjs';

import styles from './page.module.css';
import { Blog } from '@/types';
import { Post } from '@/components';

export default function Blog() {
	const [blogs, setBlogs] = useState<Blog[]>();

	useMemo(async () => {
		const res: Response = await fetch(`${process.env.BASE_URL}/api/blog`);
		const data: Blog[] = await res.json();

		setBlogs(data);
	}, []);

	return (
		<section className={styles.page}>
			{blogs ? (
				blogs?.map((blog) => {
					return <Post key={blog.id} data={blog} />;
				})
			) : (
				<p>Sorry, there was an error loading the blog.</p>
			)}
		</section>
	);
}
