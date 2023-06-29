'use client';

import { useMemo } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import type { RootState } from '@/redux/store';
import { filterAll, filterDrafts, filterPublished, filterDeleted } from '@/redux/features/blogFilter';

import styles from './style.module.css';

export default function BlogFilterButtons() {
	const blogFilter = useSelector((state: RootState) => state.blogFilter.value);
	const dispatch = useDispatch();

	const handleButtonClick = (button: string) => {
		switch (button) {
			case 'all':
				dispatch(filterAll());
				break;
			case 'drafts':
				dispatch(filterDrafts());
				break;
			case 'published':
				dispatch(filterPublished());
				break;
			case 'deleted':
				dispatch(filterDeleted());
				break;
			default:
				break;
		}
	};

	const buttons: string[] = useMemo(() => ['all', 'drafts', 'published', 'deleted'], []);

	return (
		<div className={styles.button_cluster}>
			{buttons.map((button) => {
				const key = Math.floor(Math.random() * 1000000);

				return (
					<p key={key} className={`${styles.button} ${button === blogFilter && styles.active}`} onClick={() => handleButtonClick(button)}>
						{button}
					</p>
				);
			})}
		</div>
	);
}
