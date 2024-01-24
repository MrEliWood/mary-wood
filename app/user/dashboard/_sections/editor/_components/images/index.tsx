// external
import Image from 'next/image';
import { PlusIcon } from '@radix-ui/react-icons';

// internal
import { getKey } from '@/utils';

// state
import { getState } from '@/state';

// styles
import styles from './style.module.css';

// types
import type { ImageType } from '@/types';

type Props = {
	className?: string;
};

export default function Images({ className = '' }: Props) {
	const activeBlog = getState('activeBlog');

	return (
		<div className={`${styles.image_container} ${className}`}>
			{activeBlog?.images?.map(({ src }: ImageType) => {
				return <Image key={getKey()} src={src} alt='blog image' width={120} height={120} className={styles.image} />;
			})}

			<button className={styles.add_image_button}>
				<PlusIcon width='32' height='32' />
				Add Image
			</button>
		</div>
	);
}
