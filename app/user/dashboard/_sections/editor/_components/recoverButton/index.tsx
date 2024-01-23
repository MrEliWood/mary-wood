// external
import { useState, SyntheticEvent } from 'react';

// internal
import { API } from '@/utils';
import { Button } from '@/components';

// state
import { getState } from '@/state';

// styles
import styles from './style.module.css';

export default function RecoverButton() {
	const activeBlog = getState('activeBlog');

	const recoverBlog = async (event: SyntheticEvent) => {
		const deletedBlog = await API.deleteBlog(activeBlog);
		if (!deletedBlog) return;
	};

	return (
		<Button.UI type='success' className={styles.recover_button}>
			Recover
		</Button.UI>
	);
}
