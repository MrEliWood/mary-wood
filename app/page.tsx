import { useMemo } from 'react';
import Image from 'next/image';

import { Buttons, Splash } from '@/components';
import { bio, truncateString } from '@/utils';
import portrait from '@/public/assets/images/portrait.jpg';

import styles from './page.module.css';

export default function Home() {
	const bioPreview = useMemo(() => truncateString(bio, 318), []);

	return (
		<main className={styles.page}>
			<Splash />
		</main>
	);
}
