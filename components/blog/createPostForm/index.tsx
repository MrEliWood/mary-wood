'use client';

import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import type { RootState } from '@/state/store';
import { hideBlogForm } from '@/state/features/blogFormVisible';
import { showLogin } from '@/state/features/loginVisible';

import styles from './style.module.css';
import { verifyToken } from '@/utils';

type formData = {
	author_id: string | number | undefined;
	title: string;
	caption: string;
	text: string;
};

export default function CreatePostForm() {
	const token = useSelector((state: RootState) => state.token.value);
	const blogFormVisible = useSelector((state: RootState) => state.blogFormVisible.value);
	const dispatch = useDispatch();

	const [formData, setFormData] = useState<formData>({
		author_id: process.env.USER_ID,
		title: '',
		caption: '',
		text: ''
	});

	const recoverFormData = () => {
		const storedFormData = localStorage.getItem('Mary_Wood_FormData');
		if (storedFormData) setFormData(JSON.parse(storedFormData));
	};

	useEffect(recoverFormData, []);

	const focusTitleField = () => {
		const title = document.getElementById(styles.title);

		setTimeout(() => {
			title && blogFormVisible && title.focus();
		}, 1000);
	};

	useEffect(focusTitleField, [blogFormVisible]);

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
		const { name, value } = e.target;

		const newData: formData = {
			author_id: formData.author_id,
			title: name === 'title' ? value : formData.title,
			caption: name === 'caption' ? value : formData.caption,
			text: name === 'text' ? value : formData.text
		};

		localStorage.setItem('Mary_Wood_FormData', JSON.stringify(newData));
		setFormData(newData);
	};

	const handleCancel = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		dispatch(hideBlogForm());
	};

	const handleSaveDraft = async (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();

		const validToken = token && verifyToken(token);
		if (!validToken) return dispatch(showLogin());

		try {
			const res = await fetch(`${process.env.BASE_URL}/api/blog`, {
				method: 'POST',
				body: JSON.stringify({ ...formData }),
				headers: {
					'Content-Type': 'application/json',
					Authorization: token
				}
			});

			if (res.status === 200) return window.location.reload();
			if (res.status === 500) return dispatch(showLogin());
		} catch (error) {
			alert(error);
		}
	};

	const handlePublish = async (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();

		const validToken = token && verifyToken(token);
		if (!validToken) return dispatch(showLogin());

		try {
			const res = await fetch(`${process.env.BASE_URL}/api/blog`, {
				method: 'POST',
				body: JSON.stringify({ ...formData, published: true, publishedAt: Date.now() }),
				headers: {
					'Content-Type': 'application/json',
					Authorization: token
				}
			});

			if (res.status === 200) return window.location.reload();
			if (res.status === 500) return dispatch(showLogin());
		} catch (error) {
			alert(error);
		}
	};

	return (
		<form className={styles.form}>
			<input id={styles.title} type='text' name='title' placeholder='Title' className={styles.title} value={formData.title} onChange={handleInputChange} />
			<input type='text' name='caption' placeholder='Caption' className={styles.caption} value={formData.caption} onChange={handleInputChange} />
			<textarea name='text' placeholder='Text' className={styles.body} value={formData.text} onChange={handleInputChange} />

			<div className={styles.button_block}>
				<button type='button' name='cancel' value='Cancel' className={styles.cancel_button} onClick={handleCancel}>
					Cancel
				</button>

				<button type='button' name='draft' onClick={handleSaveDraft}>
					Save as Draft
				</button>

				<button type='button' name='publish' className={styles.publish_button} onClick={handlePublish}>
					Publish
				</button>
			</div>
		</form>
	);
}
