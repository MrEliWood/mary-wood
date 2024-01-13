'use client';

import { useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import dayjs from 'dayjs';

import { Button } from '@/components';
import { API } from '@/utils';

import { useSelector, useDispatch } from 'react-redux';
import type { RootState } from '@/state/store';
import { setBlogs } from '@/state/features/blogData';

import styles from './style.module.css';

// types
import type { BlogType } from '@/types';

interface Props {
	data: BlogType;
}

export default function Preview(props: Props) {
	const { id, title, caption, text, images, published, deleted, updatedAt } = props.data;
	const token = useSelector((state: RootState) => state.token.value);
	const dispatch = useDispatch();
	const router = useRouter();

	const date = dayjs(updatedAt).format('MMMM D, YYYY - h:mm a');
	const href = '/blog/' + id;

	const deleteBlog = async () => {
		try {
			const blogDeleted = await API.deleteBlog(props.data, token);

			if (blogDeleted) {
				const blogs = await API.getBlogs();
				dispatch(setBlogs(blogs));

				alert('Blog successfully deleted!');
			}
		} catch (error) {
			console.error(error);

			alert('Sorry, something went wrong.');
		}
	};

	return (
		<article className={styles.post}>
			<div className={styles.post_section}>
				<p className={styles.timestamp}>{date}</p>
				<h2>{title}</h2>
			</div>

			{images ? (
				<div className={styles.blog_gallery}>
					{images.map((image) => {
						const key = Math.floor(Math.random() * 1000000);

						return (
							<div key={key} className={styles.blog_image_container}>
								<Image src={image.src} alt='blog image' width={200} height={300} className={styles.blog_image} />
							</div>
						);
					})}
				</div>
			) : (
				<hr />
			)}

			<div className={styles.post_section}>
				<p>{caption}</p>
			</div>

			<Link href={href} className='hidden_link'>
				<Button.TextArrow>Read More</Button.TextArrow>
			</Link>
		</article>
	);
}
