import Image from 'next/image';

import styles from './page.module.css';
import { worklist } from '@/utils';

interface Props {
	params: { index: number };
}

export default function DynamicWriting(props: Props) {
	const { index } = props.params;
	const { category, sub, title, caption, description, preview, image, published, link, table } = worklist[index];

	return (
		<div className={styles.page}>
			<div className={styles.art}>
				<Image src={image} alt='Life Writing & Schizophrenia' className={styles.cover} />
			</div>

			<div className={styles.content}>
				<div className={styles.content_row}>
					<h1>{title}</h1>
					<h2>{caption}</h2>
				</div>

				<p>{description}</p>

				<h5>Published {published}</h5>
			</div>
		</div>
	);
}
