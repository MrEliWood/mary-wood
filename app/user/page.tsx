'use client';

// styles
import styles from './_styles/page.module.css';
import { useRouter } from 'next/navigation';

export default function Dashboard() {
	const router = useRouter();

	router.push('/user/dashboard');

	return <main className={styles.main}></main>;
}
