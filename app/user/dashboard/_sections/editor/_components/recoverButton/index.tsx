// external
import { mutate } from 'swr';

// internal
import { API } from '@/utils';
import { Button } from '@/components';

// state
import { getState, setState, useDispatch } from '@/state';

// styles
import styles from './style.module.css';

export default function RecoverButton() {
	const activeBlog = getState('activeBlog');
	const dispatch = useDispatch();

	const recoverBlog = async () => {
		const recoveredBlog = await API.recoverBlog(activeBlog);
		if (!recoveredBlog) return;

		dispatch(setState('setActiveBlog', recoveredBlog));
		mutate('/api/blog');
	};

	return (
		<Button.UI type='success' className={styles.recover_button} onClick={recoverBlog}>
			Recover
		</Button.UI>
	);
}
