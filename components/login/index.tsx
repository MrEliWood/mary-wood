'use client';

import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createToken } from '@/redux/features/token';
import { hideLogin } from '@/redux/features/loginVisible';
import { usePathname, useRouter } from 'next/navigation';

import styles from './style.module.css';

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
			dispatch(hideLogin());

			if (pathname !== '/blog') router.push('/blog');
		} catch (error) {
			alert(error);
		}
	};

	return (
		<aside className={styles.login} onClick={() => dispatch(hideLogin())}>
			<div className={styles.modal} onClick={(e) => e.stopPropagation()}>
				<div className={styles.login_banner}>
					<h2>Hi, Mary!</h2>
					<p>Please enter your password.</p>
				</div>

				<form className={styles.login_form} onSubmit={handleFormSubmit}>
					<input type='password' placeholder='password' autoFocus value={password} onChange={(e) => setPassword(e.target.value)} />

					<div className='button_block'>
						<input type='button' value='Cancel' onClick={() => dispatch(hideLogin())} />
						<input type='submit' value='Login' />
					</div>
				</form>
			</div>
		</aside>
	);
}
