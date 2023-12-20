'use client';

import { Button, TextArea, TextField } from '@radix-ui/themes';

import { Thumbnail } from '../../_components';

import styles from './style.module.css';

import type { Blogs } from '@/types';

type Props = {
	blogData: Blogs;
};

export default function Editor({ blogData }: Props) {
	return (
		<section className={styles.section}>
			<div className={styles.toolbar}>
				<Button>
					<BookmarkIcon width='16' height='16' /> New Blog Post
				</Button>
			</div>

			<TextField.Input size='3' placeholder='Title' />
			<TextField.Input size='3' placeholder='Caption...' />
			<TextArea size='3' placeholder='Text...' />
		</section>
	);
}
