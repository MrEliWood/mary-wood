'use client';

// external
import { useState, useEffect, ChangeEventHandler, UIEvent, UIEventHandler } from 'react';
import Image from 'next/image';
import { PlusIcon } from '@radix-ui/react-icons';

// internal
import { TextArea } from '../../_components';
import { getKey } from '@/utils';

// state
import { getState, useDispatch, setActiveBlog, setEditorScrolled } from '@/redux';

// style
import styles from './style.module.css';

// types
import type { ImageType } from '@/types';

// variables
const editorId = 'editor';

const titleId = 'editor-title-input';
const captionId = 'editor-caption-input';
const textId = 'editor-text-input';

export default function Editor() {
	const [startPosition, setStartPosition] = useState(0);
	const activeBlog = getState('activeBlog');
	const dispatch = useDispatch();

	const { title, caption, text } = activeBlog;

	const getInputElement = (id: string) => {
		return document.getElementById(id) as HTMLInputElement;
	};

	const adjustInputHeight = (element: HTMLInputElement) => {
		if (!element) return;

		element.style.height = '1px';
		element.style.height = element.scrollHeight + 'px';
	};

	const handleInputChange = ({ name, value }: { name: string; value: string }) => {
		dispatch(
			setActiveBlog({
				...activeBlog,
				[name]: value.replaceAll('\n', ' ')
			})
		);
	};

	useEffect(() => adjustInputHeight(getInputElement(titleId)), [title]);
	useEffect(() => adjustInputHeight(getInputElement(captionId)), [caption]);
	useEffect(() => adjustInputHeight(getInputElement(textId)), [text]);

	const handleScroll = (event: UIEvent<HTMLElement>) => {
		const element = event.target as HTMLElement;
		const position = element.children[0].getBoundingClientRect().top;
		const isScrolled = position < startPosition;

		dispatch(setEditorScrolled(isScrolled));
	};

	useEffect(() => {
		const editorElement = document.getElementById(editorId);

		const position = editorElement?.children[0].getBoundingClientRect().top || 0;
		setStartPosition(position);
	}, []);

	return (
		<section id={editorId} className={styles.section} onScroll={handleScroll}>
			<div className={styles.editor}>
				{/* <textarea id={titleId} placeholder='New Blog Title' name='title' value={activeBlog.title} onChange={handleInputChange} className={styles.title} /> */}
				<TextArea name='title' value={title} placeholder='New Blog Title' onChange={handleInputChange} className={styles.title} />

				<textarea id={captionId} placeholder='Caption for your new blog (optional).' name='caption' value={activeBlog.caption || ''} onChange={handleInputChange} className={styles.caption} />

				<div className={styles.image_container}>
					{activeBlog.images.map(({ src }: ImageType) => {
						return <Image key={getKey()} src={src} alt='blog image' width={120} height={120} className={styles.image} />;
					})}

					<button className={styles.add_image_button}>
						<PlusIcon width='32' height='32' />
						Add Image
					</button>
				</div>

				<textarea id={textId} placeholder='Body text...' name='text' value={activeBlog.text} onChange={handleInputChange} className={styles.text} />
			</div>
		</section>
	);
}
