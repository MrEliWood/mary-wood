'use client';

import { Button, TextArea, TextField, Text, Heading } from '@radix-ui/themes';
import { PlusIcon, TrashIcon } from '@radix-ui/react-icons';

import styles from './style.module.css';

import type { Blogs } from '@/types';

type Props = {
	blogData: Blogs;
};

export default function Editor({ blogData }: Props) {
	return (
		<section className={styles.section}>
			<div className={styles.toolbar}>
				<div className={styles.button_block}>
					<Button variant='soft' color='green' highContrast>
						Publish
					</Button>

					<Button variant='soft' highContrast>
						Save as Draft
					</Button>

					<a href='#' className='hidden_link'>
						Preview
					</a>
				</div>

				<Button variant='soft' highContrast>
					<PlusIcon width='16' height='16' /> New Blog Post
				</Button>
			</div>

			<div className={styles.editor}>
				<div className={styles.input_container}>
					<Heading size='3'>Title</Heading>
					<TextField.Input size='3' placeholder='My New Post' />
				</div>

				<div className={styles.input_container}>
					<Heading size='3'>Caption</Heading>
					<TextField.Input size='3' placeholder='Lorem ipsum dolor sit amet...' />
				</div>

				<div className={styles.input_container}>
					<Heading size='3'>Text</Heading>
					<TextArea size='3' placeholder='Cras porta, dui ut vestibulum tincidunt, tortor elit sollicitudin magna, et sollicitudin mi urna venenatis urna...' />
				</div>

				<div className={styles.input_container}>
					<Heading size='3'>Images</Heading>
					<input type='file' />
				</div>
			</div>

			<div className={styles.delete_button}>
				<Button variant='soft' color='red' highContrast>
					<TrashIcon width='16' height='16' /> Delete
				</Button>
			</div>
		</section>
	);
}
