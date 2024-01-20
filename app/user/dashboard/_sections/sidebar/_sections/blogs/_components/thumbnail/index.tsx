// external
import dayjs from 'dayjs';

// internal
import { getState, setState, useDispatch } from '@/state';
import { Badge } from '..';

// styles
import styles from './style.module.css';

// types
import type { BlogData } from '@/types';

type BlogProps = {
	blogData: BlogData;
};

export default function Thumbnail({ blogData }: BlogProps) {
	const activeBlog = getState('activeBlog');
	const dispatch = useDispatch();

	const { id, title, caption, text, publishedAt } = blogData;

	const month = dayjs(publishedAt).format('MM');
	const day = dayjs(publishedAt).format('DD');
	const year = dayjs(publishedAt).format('YYYY');
	const delineator = <span>/</span>;

	const handleClick = () => {
		dispatch(setState('setActiveBlog', blogData));
	};

	return (
		<div className={`${styles.blog} ${id === activeBlog.id ? styles.active : ''}`} onClick={handleClick}>
			<div className={styles.row}>
				<p className={styles.title}>{title}</p>

				<Badge blogData={blogData} />
			</div>

			<p className={styles.caption}>{caption}</p>

			<p className={styles.text}>{text}</p>
		</div>
	);
}
