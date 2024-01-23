'use client';

// external
import { useState, Dispatch, SetStateAction } from 'react';
import { useRouter } from 'next/navigation';

// internal
import { Button, Modal } from '@/components';
import { API } from '@/utils';

// state
import { setState, useDispatch } from '@/state';

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
		const userData = await API.login(password);

		if (!userData.token) {
			setError(true);
			return;
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
				<Modal.Form>
					<div>
						<p>Password</p>
						<input type='password' placeholder='••••••••••••' name='current' value={password} onChange={(e) => setPassword(e.target.value)} />
					</div>
				</Modal.Form>

				<Modal.FormError error={error}>
					<p>Something went wrong...</p>
				</Modal.FormError>

				<Modal.Buttons>
					<Button.UI type='secondary' onClick={() => router.back()}>
						Cancel
					</Button.UI>

					<Button.UI onClick={login}>Login</Button.UI>
				</Modal.Buttons>
			</Modal.Body>
		</Modal.Frame>
	);
}
