'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import dayjs from 'dayjs';

import styles from './page.module.css';

type image = {
	blog_id: number;
	createdAt: string;
	id: number;
	src: string;
	updatedAt: string;
};

type blog = {
	author: Object;
	author_id: number;
	caption: string;
	createdAt: string;
	id: number;
	images: image[];
	text: string;
	title: string;
	updatedAt: string;
};

export default function Blog() {
	const [blogs, setBlogs] = useState<blog[]>();

	useMemo(async () => {
		const res: Response = await fetch(`${process.env.BASE_URL}/api/blog`);
		const data: blog[] = await res.json();

		setBlogs(data);
	}, []);

	// temporary placeholder text
	const placeholder = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus laboriosam perferendis fugit debitis, odit eaque ipsam sed quam magni eligendi aspernatur quos cumque fugiat consectetur, velit similique consequuntur aut enim.';

	return (
		<section className={styles.page}>
			{blogs?.map((blog) => {
				const date = dayjs(blog.updatedAt).format('MMMM D, YYYY - h:mm a');

				return (
					<article key={blog.id}>
						<div className={styles.blog_content}>
							<p className={styles.timestamp}>{date}</p>
							<h2>{blog.title}</h2>
							<h4>{blog.caption}</h4>
							<hr />
							<p>{blog.text}</p>
						</div>

						<div>
							{blog.images &&
								blog.images.map((image) => {
									return <Image src={image.src} alt='blog image' width={200} height={300} className={styles.blog_image} />;
								})}
						</div>
					</article>
				);
			})}
		</section>
	);
}
