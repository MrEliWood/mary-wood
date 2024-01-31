'use client';

// external
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import dayjs from 'dayjs';
import useSWR from 'swr';

// internal
import { API } from '@/utils';

// state
import { setState, useDispatch } from '@/state';

// style
import styles from './page.module.css';

// types
import { ImageType } from '@/types';

type Props = {
	params: { id: number };
};

export default async function BlogPage({ params }: Props) {
	const dispatch = useDispatch();
	const router = useRouter();

	const { data, error, isLoading } = useSWR('/api/blog', API.getAllBlogs);
	dispatch(setState('setAllBlogs', data));

	if (isLoading) return <main className={styles.page}>Loading...</main>;
	if (error) return <main className={styles.page}>Error: {error}</main>;

	const blog = data?.published.find((blog) => blog.id === params.id);

	if (!blog) {
		return <main className={styles.page}>Not found...</main>;
	}

	const { caption, images, text, title, publishedAt } = blog;
	const date = dayjs(publishedAt).format('MMMM D, YYYY');

	return (
		<main className={styles.page}>
			<div className={styles.headline}>
				<h5 className={styles.date}>{date}</h5>
				<h1>{title}</h1>
			</div>

			{images ? (
				<div className={styles.gallery}>
					{images.map((image: ImageType) => {
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
