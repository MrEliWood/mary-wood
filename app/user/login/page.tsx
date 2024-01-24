'use client';

// external
import { useState, useEffect, Dispatch, SetStateAction, ChangeEventHandler, SyntheticEvent } from 'react';
import { useRouter } from 'next/navigation';

// internal
import { Button, Modal } from '@/components';
import { API } from '@/utils';

// state
import { setState, useDispatch } from '@/state';

// styles
import styles from './page.module.css';

type Props = {
	modalVisible: boolean;
	setModalVisible: Dispatch<SetStateAction<boolean>>;
};

export default function LoginModal() {
	const [password, setPassword] = useState('');
	const [error, setError] = useState(false);
	const dispatch = useDispatch();

	const router = useRouter();

	const login = async () => {
		if (password.length < 8) return;

		const userData = await API.login(password);

		if (!userData.token) {
			setError(true);
			return;
		}

		if (password === 'password') {
			localStorage.setItem('Mary Wood - Reset Password Flag', 'Password is not secure.');
		}

		dispatch(setState('login', userData));
		router.push('/user/dashboard');
	};

	return (
		<Modal.Frame isVisible={true} setIsVisible={() => router.back()}>
			<Modal.Header>
				<Modal.Title>Hi, Mary!</Modal.Title>

				<div>
					<p>Please enter your password.</p>
				</div>
			</Modal.Header>

			<Modal.Body>
				<Modal.Form onSubmit={login}>
					<label>Password</label>
					<input type='password' placeholder='••••••••••••' name='current' value={password} onChange={(e) => setPassword(e.target.value)} />

					<Modal.FormError visible={error}>
						<p>Something went wrong...</p>
					</Modal.FormError>
				</Modal.Form>

				<Modal.Buttons>
					<Button.UI type='secondary' onClick={() => router.back()}>
						Cancel
					</Button.UI>

					<Button.UI className={password.length < 8 ? styles.invalid : ''} onClick={login}>
						Login
					</Button.UI>
				</Modal.Buttons>
			</Modal.Body>
		</Modal.Frame>
	);
}
