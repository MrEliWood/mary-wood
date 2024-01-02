'use client';

import { SyntheticEvent } from 'react';
import Image from 'next/image';
import { PlusIcon, TrashIcon } from '@radix-ui/react-icons';

import { Button } from '../../_components';

import { useSelector, useDispatch } from 'react-redux';
import type { RootState } from '@/redux/store';
import { setActiveBlog, newActiveBlog } from '@/redux/features/activeBlog';

import styles from './style.module.css';

import type { ImageType, BlogData } from '@/types';

type Props = {
	blogData: BlogData;
};

export default function Editor({ blogData }: Props) {
	const activeBlog = useSelector((state: RootState) => state.activeBlog.value);
	const dispatch = useDispatch();

	const handleInputChange = (event: SyntheticEvent) => {
		const { name, value } = event.target as HTMLInputElement;

		dispatch(
			setActiveBlog({
				...activeBlog,
				[name]: value
			})
		);
	};

	const createNewBlog = () => {
		dispatch(newActiveBlog());
	};

	return (
		<section className={styles.section}>
			<div className={styles.toolbar}>
				<Button onClick={createNewBlog}>
					<PlusIcon width='16' height='16' /> New Blog Post
				</Button>

				<div className={styles.button_block}>
					<Button style='ghost'>Save as Draft</Button>

					<Button style='success'>Publish</Button>
				</div>
			</div>

			<div className={styles.editor}>
				<textarea placeholder='New Blog Title' name='title' value={activeBlog.title} onChange={handleInputChange} className={styles.title} autoFocus />

				<div className={styles.image_container}>
					{activeBlog.images.map(({ src }: ImageType) => {
						return <Image src={src} alt='blog image' width={100} height={100} className={styles.image} />;
					})}

					<button className={styles.add_image_button}>
						<PlusIcon width='32' height='32' />
						Add Image
					</button>
				</div>

				<textarea placeholder='Optional caption for your new blog.' name='caption' value={activeBlog.caption} onChange={handleInputChange} className={styles.caption} />

				<hr />

				<div className={styles.text_container}>
					<textarea placeholder='Body text...' name='text' value={activeBlog.text} onChange={handleInputChange} className={styles.text} />
				</div>
			</div>

			<div className={styles.delete_button}>
				<Button style='danger'>
					<TrashIcon width='16' height='16' /> Delete
				</Button>
			</div>
		</section>
	);
}
