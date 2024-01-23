// external
import { useState, useEffect, SyntheticEvent, Dispatch, SetStateAction } from 'react';
import { useRouter } from 'next/navigation';

// internal
import { Modal } from '@/components';
import { Button } from '@/components';
import { API, getKey } from '@/utils';

// styles
import styles from './style.module.css';

// variable
const currentID = 'current_input__' + getKey();

type Props = {
	modalVisible: boolean;
	setModalVisible: Dispatch<SetStateAction<boolean>>;
};

export default function CPWButton({ modalVisible, setModalVisible }: Props) {
	const [currentPW, setCurrentPW] = useState('');
	const [newPW, setNewPW] = useState('');
	const [confirmPW, setConfirmPW] = useState('');
	const [error, setError] = useState(false);
	const [loading, setLoading] = useState(false);
	const [failed, setFailed] = useState(false);

	const router = useRouter();

	const changePassword = async (event: SyntheticEvent) => {
		event.preventDefault();
		event.stopPropagation();

		if (newPW !== confirmPW) {
			setError(true);
			return;
		}

		setLoading(true);

		const passwordChanged = await API.changePW({ currentPW, newPW });

		if (passwordChanged) {
			localStorage.removeItem('Mary Wood - Unsaved Blog');
			router.push('/admin/login');
			return;
		}

		setLoading(false);
		setFailed(true);
	};

	const resetInputs = () => {
		setCurrentPW('');
		setNewPW('');
		setConfirmPW('');
		setError(false);
	};

	const focusFirstInput = () => {
		if (!modalVisible) return;

		const element = document.getElementById(currentID);
		element?.focus();
	};

	const clearError = () => setError(false);

	useEffect(resetInputs, [modalVisible]);
	useEffect(focusFirstInput, [modalVisible]);
	useEffect(clearError, [currentPW, newPW, confirmPW]);

	const invalidInput = currentPW.length < 8 || newPW.length < 8 || confirmPW.length < 8;

	if (failed) {
		return (
			<Modal.Frame isVisible={modalVisible} setIsVisible={setModalVisible}>
				<Modal.Header>
					<Modal.Title>Something went wrong...</Modal.Title>
				</Modal.Header>
			</Modal.Frame>
		);
	}

	if (loading) {
		return (
			<Modal.Frame isVisible={modalVisible} setIsVisible={setModalVisible}>
				<Modal.Header>
					<Modal.Title>Changing password...</Modal.Title>
				</Modal.Header>
			</Modal.Frame>
		);
	}

	return (
		<Modal.Frame isVisible={modalVisible} setIsVisible={setModalVisible}>
			<Modal.Header>
				<Modal.Title>Change Password</Modal.Title>

				<Modal.Caption>
					<p>Your password must be 8 characters or more.</p>
					<p>You will need to login again with your new password.</p>
				</Modal.Caption>
			</Modal.Header>

			<Modal.Body>
				<Modal.Form>
					<label>Current Password</label>
					<input type='password' placeholder='••••••••••••' name='current' id={currentID} value={currentPW} onChange={(e) => setCurrentPW(e.target.value)} />

					<label>New Password</label>
					<input type='password' placeholder='••••••••••••' name='new' value={newPW} onChange={(e) => setNewPW(e.target.value)} />

					<label>Confirm New Password</label>
					<input type='password' placeholder='••••••••••••' name='confirm' value={confirmPW} onChange={(e) => setConfirmPW(e.target.value)} />

					<Modal.FormError visible={error}>
						<p>Your new passwords don't match.</p>
						<p>Try typing them again.</p>
					</Modal.FormError>
				</Modal.Form>
			</Modal.Body>

			<Modal.Buttons>
				<Button.UI type='secondary' onClick={() => setModalVisible(false)}>
					Cancel
				</Button.UI>

				<Button.UI className={invalidInput ? styles.invalid : ''} onClick={changePassword}>
					Change
				</Button.UI>
			</Modal.Buttons>
		</Modal.Frame>
	);
}
