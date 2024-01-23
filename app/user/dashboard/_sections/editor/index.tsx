'use client';

// external
import { useState, useEffect, SyntheticEvent, UIEvent, UIEventHandler } from 'react';
import Image from 'next/image';
import { PlusIcon } from '@radix-ui/react-icons';

// internal
import { RecoverButton } from './_components';
import { TextArea, Button } from '@/components';
import { getKey } from '@/utils';

// state
import { getState, setState, useDispatch } from '@/state';

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

	const { title, caption, text, deleted } = activeBlog;

	const focusEditor = () => {
		const firstInput = document.querySelector('textarea');
		firstInput?.focus();
	};

	const cleanInputValue = (name: string, value: string) => {
		if (name === 'text') return value;

		return value.replaceAll('\n', '');
	};

	const setInputValue = (element: HTMLInputElement) => {
		const { name, value } = element;

		const newValues = {
			...activeBlog,
			[name]: cleanInputValue(name, value)
		};

		dispatch(setState('setActiveBlog', newValues));
		localStorage.setItem('Mary Wood - Unsaved Blog', JSON.stringify(newValues));
	};

	const handleInputChange = (event: SyntheticEvent) => {
		const element = event.target as HTMLInputElement;

		setInputValue(element);
	};

	const handleScroll = (event: UIEvent<HTMLElement>) => {
		const element = event.target as HTMLElement;

		const position = element.children[0].getBoundingClientRect().top;
		const isScrolled = position < startPosition;

		dispatch(setState('setEditorScrolled', isScrolled));
	};

	useEffect(() => {
		const editorElement = document.getElementById(editorId);

		const position = editorElement?.children[0].getBoundingClientRect().top || 0;
		setStartPosition(position);
		focusEditor();
	}, []);

	return (
		<section id={editorId} className={styles.section} onScroll={handleScroll}>
			<div className={`${styles.editor} ${deleted ? styles.fade : ''}`}>
				<TextArea id={titleId} placeholder='New Blog Title' name='title' value={title} onChange={handleInputChange} className={styles.title} />

				<TextArea id={captionId} placeholder='Caption for your new blog (optional).' name='caption' value={caption || ''} onChange={handleInputChange} className={styles.caption} />

				<div className={styles.image_container}>
					{activeBlog?.images?.map(({ src }: ImageType) => {
						return <Image key={getKey()} src={src} alt='blog image' width={120} height={120} className={styles.image} />;
					})}

					<button className={styles.add_image_button}>
						<PlusIcon width='32' height='32' />
						Add Image
					</button>
				</div>

				<TextArea id={textId} placeholder='Body text...' name='text' value={text} onChange={handleInputChange} allowLineBreaks className={styles.text} />

				{deleted ? <RecoverButton /> : ''}
			</div>
		</section>
	);
}
