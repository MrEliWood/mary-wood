'use client';

import Image from 'next/image';
import dayjs from 'dayjs';

import styles from './style.module.css';
import { Blog } from '@/types';

interface Props {
	data: Blog;
}

export default function Post(props: Props) {
	const { id, title, caption, text, images, updatedAt } = props.data;

	const date = dayjs(updatedAt).format('MMMM D, YYYY - h:mm a');

	return (
		<article key={id}>
			<div className={styles.blog_content}>
				<p className={styles.timestamp}>{date}</p>
				<h2>{title}</h2>
				<h4>{caption}</h4>
				<hr />
				<p>{text}</p>
			</div>

			<div>
				{images &&
					images.map((image) => {
						return <Image key={image.id} src={image.src} alt='blog image' width={200} height={300} className={styles.blog_image} />;
					})}
			</div>
		</article>
	);
}
