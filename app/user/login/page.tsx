'use client';

// external
import { useState, Dispatch, SetStateAction } from 'react';
import { useRouter } from 'next/navigation';

// internal
import { Button, Modal } from '@/components';
import { API } from '@/utils';

type Props = {
	modalVisible: boolean;
	setModalVisible: Dispatch<SetStateAction<boolean>>;
};

export default function LoginModal() {
	const [password, setPassword] = useState('');
	const [error, setError] = useState(false);

	const router = useRouter();

	const login = async () => {
		const id = process.env.USER_ID || '1';

		const success = await API.login(id, password);

		if (!success) {
			setError(true);
			return;
		}

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
