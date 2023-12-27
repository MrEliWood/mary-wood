'use client';

import { SyntheticEvent } from 'react';
import Image from 'next/image';
import { PlusIcon, TrashIcon } from '@radix-ui/react-icons';

import { Button } from '../../_components';

import { useSelector, useDispatch } from 'react-redux';
import type { RootState } from '@/redux/store';
import { setActiveBlog } from '@/redux/features/activeBlog';

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

	return (
		<section className={styles.section}>
			<div className={styles.toolbar}>
				<div className={styles.button_block}>
					<Button style='success'>Publish</Button>

					<Button>Save as Draft</Button>

					<Button style='ghost'>Preview</Button>
				</div>

				<Button>
					<PlusIcon width='16' height='16' /> New Blog Post
				</Button>
			</div>

			<div className={styles.editor}>
				<input type='text' placeholder='My New Post' name='title' value={activeBlog.title} onChange={handleInputChange} className={styles.title} autoFocus />

				{/* <input type='file' /> */}

				<div className={styles.image_container}>
					{activeBlog.images.map(({ src }: ImageType) => {
						return <Image src={src} alt='blog image' width={100} height={100} className={styles.image} />;
					})}

					{/* <input type='file' /> */}

					<button className={styles.add_image_button}>
						<PlusIcon width='32' height='32' />
						Add Image
					</button>
				</div>

				<input type='text' placeholder='Lorem ipsum dolor sit amet.' name='caption' value={activeBlog.caption} onChange={handleInputChange} className={styles.caption} />

				<hr />

				<textarea placeholder='Lorem ipsum dolor sit amet...' name='text' value={activeBlog.text} onChange={handleInputChange} className={styles.text} />
			</div>

			<div className={styles.delete_button}>
				<Button style='danger'>
					<TrashIcon width='16' height='16' /> Delete
				</Button>
			</div>
		</section>
	);
}
