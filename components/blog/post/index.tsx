'use client';

import Image from 'next/image';
import dayjs from 'dayjs';
import { useSelector } from 'react-redux';
import type { RootState } from '@/redux/store';

import styles from './style.module.css';
import { Blog } from '@/types';

interface Props {
	data: Blog;
}

export default function Post(props: Props) {
	const { id, title, caption, text, images, published, deleted, updatedAt } = props.data;

	const blogFilter = useSelector((state: RootState) => state.blogFilter.value);
	const token = useSelector((state: RootState) => state.token.value);

	const date = dayjs(updatedAt).format('MMMM D, YYYY - h:mm a');

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

					<button className={styles.delete_button}>
						<svg width='14.1797' height='17.6147'>
							<g>
								<rect height='17.6147' opacity='0' width='14.1797' x='0' y='0' />
								<path d='M3.87451 3.34717L5.03906 3.34717L5.03906 1.77979C5.03906 1.3623 5.33203 1.09131 5.77148 1.09131L8.39355 1.09131C8.83301 1.09131 9.12598 1.3623 9.12598 1.77979L9.12598 3.34717L10.2905 3.34717L10.2905 1.70654C10.2905 0.644531 9.60205 0 8.47412 0L5.69092 0C4.56299 0 3.87451 0.644531 3.87451 1.70654ZM0.549316 3.93311L13.6377 3.93311C13.938 3.93311 14.1797 3.67676 14.1797 3.37646C14.1797 3.07617 13.938 2.82715 13.6377 2.82715L0.549316 2.82715C0.256348 2.82715 0 3.07617 0 3.37646C0 3.68408 0.256348 3.93311 0.549316 3.93311ZM3.73535 16.311L10.4517 16.311C11.499 16.311 12.2021 15.6299 12.2534 14.5825L12.7661 3.79395L11.5869 3.79395L11.0962 14.458C11.0815 14.8975 10.7666 15.2051 10.3345 15.2051L3.83789 15.2051C3.42041 15.2051 3.10547 14.8901 3.0835 14.458L2.56348 3.79395L1.41357 3.79395L1.93359 14.5898C1.98486 15.6372 2.67334 16.311 3.73535 16.311ZM4.92188 13.9526C5.2002 13.9526 5.3833 13.7769 5.37598 13.5205L5.14893 5.68359C5.1416 5.42725 4.9585 5.25879 4.69482 5.25879C4.4165 5.25879 4.2334 5.43457 4.24072 5.69092L4.46045 13.5205C4.46777 13.7842 4.65088 13.9526 4.92188 13.9526ZM7.08984 13.9526C7.36816 13.9526 7.56592 13.7769 7.56592 13.5205L7.56592 5.69092C7.56592 5.43457 7.36816 5.25879 7.08984 5.25879C6.81152 5.25879 6.62109 5.43457 6.62109 5.69092L6.62109 13.5205C6.62109 13.7769 6.81152 13.9526 7.08984 13.9526ZM9.26514 13.9526C9.52881 13.9526 9.71191 13.7842 9.71924 13.5205L9.93896 5.69092C9.94629 5.43457 9.76318 5.25879 9.48486 5.25879C9.22119 5.25879 9.03809 5.42725 9.03076 5.69092L8.81104 13.5205C8.80371 13.7769 8.98682 13.9526 9.26514 13.9526Z' />
							</g>
						</svg>
					</button>
				</div>
			)}
		</article>
	);
}
