// external
import { useState } from 'react';
import { mutate } from 'swr';

// internal
import { UnsavedModal } from '@/components';
import { API, autosave } from '@/utils';
import { Badge } from '..';

// state
import { getState, setState, useDispatch } from '@/state';

// styles
import styles from './style.module.css';

// types
import type { BlogData } from '@/types';

type BlogProps = {
	blogData: BlogData;
};

export default function Thumbnail({ blogData }: BlogProps) {
	const [modalVisible, setModalVisible] = useState(false);
	const activeBlog = getState('activeBlog');
	const dispatch = useDispatch();

	const { id, title, caption, text, deleted } = blogData;

	const setActiveBlog = () => {
		dispatch(setState('setActiveBlog', blogData));
		mutate('/api/blog');
	};

	const handleClick = async () => {
		const isSaved = await autosave();

		if (!isSaved) {
			setModalVisible(true);
			return;
		}

		setActiveBlog();
	};

	return (
		<>
			<div className={`${styles.blog} ${id === activeBlog.id ? styles.active : ''} ${deleted ? styles.fade : ''}`} onClick={handleClick}>
				<div className={styles.row}>
					<p className={styles.title}>{title}</p>

					<Badge blogData={blogData} />
				</div>

				<p className={styles.caption}>{caption}</p>

				<p className={styles.text}>{text}</p>
			</div>

			<UnsavedModal modalVisible={modalVisible} setModalVisible={setModalVisible} onConfirm={setActiveBlog} />
		</>
	);
}
