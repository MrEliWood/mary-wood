'use client';

// external
import { useState, useEffect, SyntheticEvent } from 'react';
import Image from 'next/image';
import { PlusIcon, TrashIcon } from '@radix-ui/react-icons';

// internal
import { Button } from '../../_components';
import { Menu } from './_sections';

// state
import { useSelector, useDispatch } from 'react-redux';
import type { RootState } from '@/redux/store';
import { setActiveBlog, newActiveBlog } from '@/redux/features/activeBlog';

// style
import styles from './style.module.css';

// types
import type { ImageType } from '@/types';

// variables
const sectionId = 'editor-section';
const editorId = 'editor';

const titleId = 'editor-title-input';
const captionId = 'editor-caption-input';
const textId = 'editor-text-input';

export default function Editor() {
	const [startPosition, setStartPosition] = useState(0);
	const [scrollPosition, setScrollPosition] = useState(0);
	const activeBlog = useSelector((state: RootState) => state.activeBlog.value);
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

	const handleInputChange = (event: SyntheticEvent) => {
		const element = event.target as HTMLInputElement;
		const { name, value } = element;

		dispatch(
			setActiveBlog({
				...activeBlog,
				[name]: value
			})
		);
	};

	useEffect(() => adjustInputHeight(getInputElement(titleId)), [title]);
	useEffect(() => adjustInputHeight(getInputElement(captionId)), [caption]);
	useEffect(() => adjustInputHeight(getInputElement(textId)), [text]);

	const handleScroll = (event: Event) => {
		const element = event.target as HTMLElement;

		const position = element.children[0].getBoundingClientRect().top;
		setScrollPosition(position);
	};

	useEffect(() => {
		const sectionElement = document.getElementById(sectionId);

		const position = sectionElement?.children[0].getBoundingClientRect().top || 0;
		setStartPosition(position);
		setScrollPosition(position);

		sectionElement?.addEventListener('scroll', handleScroll);

		return () => {
			sectionElement?.removeEventListener('scroll', handleScroll);
		};
	}, []);

	const isScrolled = scrollPosition < startPosition;

	return (
		<section id={sectionId} className={styles.section}>
			<div id={editorId} className={styles.editor}>
				<textarea id={titleId} placeholder='New Blog Title' name='title' value={activeBlog.title} onChange={handleInputChange} className={styles.title} autoFocus />

				<textarea id={captionId} placeholder='Caption for your new blog (optional).' name='caption' value={activeBlog.caption} onChange={handleInputChange} className={styles.caption} />

				<div className={styles.image_container}>
					{activeBlog.images.map(({ src }: ImageType) => {
						return <Image src={src} alt='blog image' width={120} height={120} className={styles.image} />;
					})}

					<button className={styles.add_image_button}>
						<PlusIcon width='32' height='32' />
						Add Image
					</button>
				</div>

				<textarea id={textId} placeholder='Body text...' name='text' value={activeBlog.text} onChange={handleInputChange} className={styles.text} />
			</div>

			<Menu isScrolled={isScrolled} titleId={titleId} />
		</section>
	);
}
