'use client';

// external
import { useState } from 'react';

// internal
import { Button } from '@/components';

// styles
import styles from './style.module.css';

export default function Login() {
	const [modalVisible, setModalVisible] = useState(true);

	return (
		<Button.Primary onClick={() => setModalVisible(true)} className={styles.button}>
			Login
		</Button.Primary>
	);
}
