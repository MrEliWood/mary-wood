'use client';

// external
import Image from 'next/image';
import Link from 'next/link';
import dayjs from 'dayjs';

// internal
import { Button } from '@/components';

// styles
import styles from './style.module.css';

// types
import type { BlogData } from '@/types';

interface Props {
	blogData: BlogData;
}

export default function Preview({ blogData }: Props) {
	const { id, title, caption, text, images, published, deleted, publishedAt } = blogData;

	const date = dayjs(publishedAt).format('MMMM D, YYYY - h:mm a');
	const href = '/blog/' + id;

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
