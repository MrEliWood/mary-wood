'use client';

import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createToken } from '@/state/features/token';
import { usePathname, useRouter } from 'next/navigation';

import { Button, Modal } from '../_components';

import styles from './page.module.css';

export default function Login() {
	const [password, setPassword] = useState<string>('');
	const dispatch = useDispatch();
	const pathname = usePathname();
	const router = useRouter();

	const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		const id = process.env.USER_ID;

		try {
			const res = await fetch(`${process.env.BASE_URL}/api/user/login`, {
				method: 'POST',
				body: JSON.stringify({ id, password }),
				headers: {
					'Content-Type': 'application/json'
				}
			});

			const data = await res.json();

			if (data.error) {
				alert(data.error);
				return;
			}

			localStorage.setItem('Mary_Wood_JWT', data.token);
			dispatch(createToken(data.token));

			router.push('/admin');
		} catch (error) {
			alert(error);
		}
	};

	return (
		<main className={styles.login_container}>
			<Modal backgroundClassName={styles.background} modalClassName={styles.modal}>
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
