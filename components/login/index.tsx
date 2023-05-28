'use client';

import { useState } from 'react';

import styles from './style.module.css';

interface Props {
	setLoginVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Login(props: Props) {
	const { setLoginVisible } = props;
	const [password, setPassword] = useState<string>('');

	const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		try {
			const res = await fetch(`${process.env.BASE_URL}/api/user/login`, {
				method: 'POST',
				body: JSON.stringify({ password }),
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
		} catch (error) {
			alert(error);
		}
	};

	return (
		<aside className={styles.login} onClick={() => setLoginVisible(false)}>
			<div className={styles.modal} onClick={(e) => e.stopPropagation()}>
				<div className={styles.login_banner}>
					<h2>Hi, Mary!</h2>
					<p>Please enter your password.</p>
				</div>

				<form className={styles.login_form} onSubmit={handleFormSubmit}>
					<input type='password' placeholder='password' autoFocus value={password} onChange={(e) => setPassword(e.target.value)} />

					<div className='button_block'>
						<input type='button' value='Cancel' onClick={() => setLoginVisible(false)} />
						<input type='submit' value='Login' />
					</div>
				</form>
			</div>
		</aside>
	);
}
