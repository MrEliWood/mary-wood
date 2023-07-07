'use client';

import { useCallback } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import dayjs from 'dayjs';

import { Buttons } from '@/components';
import { API } from '@/utils';

import { useSelector, useDispatch } from 'react-redux';
import type { RootState } from '@/redux/store';
import { setBlogs } from '@/redux/features/blogData';

import styles from './style.module.css';

// types
import type { Blog } from '@/types';

interface Props {
	data: Blog;
}

export default function Post(props: Props) {
	const { id, title, caption, text, images, published, deleted, updatedAt } = props.data;
	const token = useSelector((state: RootState) => state.token.value);
	const dispatch = useDispatch();
	const router = useRouter();

	const date = dayjs(updatedAt).format('MMMM D, YYYY - h:mm a');

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

	if (deleted) {
		return (
			<article className={`${styles.post} ${styles.deleted}`}>
				<div className={styles.post_section}>
					<p className={styles.timestamp}>{date}</p>
					<h2>{title}</h2>
				</div>

				<div className={styles.blog_buttons}>
					<button>
						Recover
						<svg width='16.7187' height='13.9521'>
							<g>
								<rect height='13.9521' opacity='0' width='16.7187' x='0' y='0' />
								<path d='M0.137641 6.99316C-0.12896 7.36914-0.00591359 7.7041 0.486274 7.7041L1.42963 7.7041C1.79877 11.1836 4.79975 13.9453 8.36127 13.9453C10.4462 13.9453 12.333 12.9951 13.6181 11.5186C13.871 11.2246 13.8369 10.8555 13.5703 10.6641C13.3037 10.4727 12.9755 10.541 12.7568 10.7939C11.6972 12.0176 10.1249 12.7832 8.36127 12.7832C5.38081 12.7832 2.95405 10.5752 2.60541 7.7041L3.62397 7.7041C4.10932 7.7041 4.23237 7.36914 3.9726 7L2.44135 4.81934C2.2226 4.50488 1.89448 4.49805 1.66889 4.81934ZM3.11127 2.42676C2.85151 2.7207 2.88569 3.08301 3.15913 3.27441C3.42573 3.46582 3.74702 3.4043 3.9726 3.15137C5.03901 1.93457 6.61127 1.16211 8.36127 1.16211C11.3349 1.16211 13.7617 3.37012 14.1171 6.24805L13.0986 6.24805C12.6132 6.24805 12.4902 6.57617 12.7499 6.95215L14.2812 9.13281C14.4999 9.44727 14.8281 9.4541 15.0537 9.13281L16.5781 6.95898C16.8515 6.57617 16.7216 6.24805 16.2294 6.24805L15.2929 6.24805C14.9169 2.76855 11.9228 0 8.36127 0C6.27631 0 4.39643 0.943359 3.11127 2.42676Z' />
							</g>
						</svg>
					</button>
				</div>
			</article>
		);
	}

	return (
		<article className={`${styles.post} ${!published && styles.draft}`}>
			<div className={styles.post_section}>
				<p className={styles.timestamp}>{date}</p>
				<h2>{title}</h2>
			</div>

			{images && (
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
			)}

			<div className={styles.post_section}>
				<h4>{caption}</h4>
				<p>{text}</p>
			</div>

			{token && (
				<div className={styles.blog_buttons}>
					{!published && <p className={styles.draft_tag}>DRAFT</p>}

					<button className={styles.edit_button}>
						<svg width='14.0008' height='14.2309'>
							<g>
								<rect height='14.2309' opacity='0' width='14.0008' x='0' y='0' />
								<path d='M2.39834 13.4304L11.9872 3.85033L10.4491 2.30345L0.851463 11.8923L0.0165019 13.8435C-0.0625996 14.0544 0.157127 14.3005 0.368064 14.2126ZM12.7606 3.09447L13.6483 2.22435C14.0966 1.77611 14.1142 1.29271 13.7187 0.888413L13.4198 0.589585C13.0243 0.194077 12.5409 0.238022 12.0927 0.668686L11.205 1.54759Z' />
							</g>
						</svg>
					</button>

					<Buttons.BlogDelete onClick={deleteBlog} />
				</div>
			)}
		</article>
	);
}
