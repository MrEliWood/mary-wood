'use client';

import { useState, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import type { RootState } from '@/redux/store';
import { hideBlogForm } from '@/redux/features/blogFormVisible';

import styles from './style.module.css';

type formData = {
	title: string;
	caption: string;
	body: string;
};

export default function CreatePostForm() {
	const blogFormVisible = useSelector((state: RootState) => state.blogFormVisible.value);
	const dispatch = useDispatch();

	const [formData, setFormData] = useState<formData>({
		title: '',
		caption: '',
		body: ''
	});

	useMemo(() => {
		const storedFormData = localStorage.getItem('Mary_Wood_FormData');
		if (storedFormData) setFormData(JSON.parse(storedFormData));
	}, []);

	useMemo(() => {
		const title = document.getElementById(styles.title);

		setTimeout(() => {
			title && blogFormVisible && title.focus();
		}, 1000);
	}, [blogFormVisible]);

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
		const { name, value } = e.target;

		const newData: formData = {
			title: name === 'title' ? value : formData.title,
			caption: name === 'caption' ? value : formData.caption,
			body: name === 'body' ? value : formData.body
		};

		localStorage.setItem('Mary_Wood_FormData', JSON.stringify(newData));
		setFormData(newData);
	};

	const handleCancel = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		console.log('clicked');
		dispatch(hideBlogForm());
	};

	return (
		<form className={styles.form}>
			<input id={styles.title} type='text' name='title' placeholder='Title' className={styles.title} value={formData.title} onChange={handleInputChange} />
			<input type='text' name='caption' placeholder='Caption' className={styles.caption} value={formData.caption} onChange={handleInputChange} />
			<textarea name='body' placeholder='Body' className={styles.body} value={formData.body} onChange={handleInputChange} />

			<div className={styles.button_block}>
				<button className={styles.cancel_button} onClick={handleCancel}>
					Cancel
				</button>
				<button>Save as Draft</button>
				<button className={styles.publish_button}>Publish</button>
			</div>
		</form>
	);
}
