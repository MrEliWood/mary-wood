import Image from 'next/image';

import dayjs from 'dayjs';

import { API } from '@/utils';

import styles from './page.module.css';

import { BlogType } from '@/types';

type Props = {
	params: { id: number };
};

export default async function BlogPage({ params }: Props) {
	const blogData: BlogType = await API.getOneBlog(params.id);
	const prevBlog: BlogType = await API.getOneBlog(params.id - 1);
	const nextBlog: BlogType = await API.getOneBlog(params.id + 1);

	const { caption, createdAt, id, images, text, title, updatedAt, publishedAt } = blogData;
	const date = dayjs(publishedAt).format('MMMM D, YYYY');

	return (
		<main className={styles.page}>
			<div className={styles.headline}>
				<h5 className={styles.date}>{date}</h5>
				<h1>{title}</h1>
			</div>

			{images ? (
				<div className={styles.gallery}>
					{images.map((image) => {
						const key = Math.floor(Math.random() * 1000000);

						return (
							<div key={key} className={styles.image_container}>
								<Image src={image.src} alt='blog image' width={200} height={300} className={styles.image} />
							</div>
						);
					})}
				</div>
			) : (
				<hr />
			)}

			<div className={styles.content}>
				<h2>{caption}</h2>
				<hr />
				<p>{text}</p>
			</div>
		</main>
	);
}
