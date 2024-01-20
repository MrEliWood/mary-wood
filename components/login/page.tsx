'use client';

// external
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

// internal
import { Button, Modal } from '../../app/blog/dashboard/_components';
import { API } from '@/utils';

// styles
import styles from './page.module.css';

export default function Login() {
	const [password, setPassword] = useState('');
	const [error, setError] = useState(false);

	const router = useRouter();

	const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		const id = process.env.USER_ID || '1';

		const success = await API.login(id, password);

		if (!success) {
			setError(true);
			return;
		}

		router.push('/blog/dashboard');
	};

	const checkForToken = () => {
		const verified = API.verifyToken();
		if (!verified) return;

		router.push('/blog/dashboard');
	};

	useEffect(checkForToken, []);

	return (
		<main className={styles.login_container}>
			<Modal isVisible={true} setIsVisible={() => {}}>
				<div className={styles.login}>
					<div className={styles.login_banner}>
						<h1>Hi, Mary!</h1>
						<p>Please enter your password.</p>
					</div>

					<form className={styles.login_form} onSubmit={handleFormSubmit}>
						<input type='password' placeholder='password' autoFocus value={password} onChange={(e) => setPassword(e.target.value)} />

						<div className={styles.button_block}>
							<Button type='secondary' onClick={() => router.back()}>
								Cancel
							</Button>

							<Button type='primary'>Login</Button>
						</div>
					</form>
				</div>
			</Modal>
		</main>
	);
}
