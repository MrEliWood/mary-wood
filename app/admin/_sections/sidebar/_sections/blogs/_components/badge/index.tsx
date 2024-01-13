// external
import dayjs from 'dayjs';

// styles
import styles from './style.module.css';

// types
import type { BlogData } from '@/types';

type BlogProps = {
	blogData: BlogData;
};

export default function Badge({ blogData }: BlogProps) {
	const { deleted, published, publishedAt } = blogData;

	const month = dayjs(publishedAt).format('MM');
	const day = dayjs(publishedAt).format('DD');
	const year = dayjs(publishedAt).format('YYYY');

	const delineator = <span>/</span>;

	// prettier-ignore
	const date = <>{month}{delineator}{day}{delineator}{year}</>;

	const className = deleted ? styles.deleted : published ? styles.published : styles.draft;
	const innerText = deleted ? <>Deleted</> : published ? date : <>Draft</>;

	return (
		<div className={styles.badge_container}>
			<p className={`${styles.badge} ${className}`}>{innerText}</p>
		</div>
	);
}
