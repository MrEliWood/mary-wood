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
const newID = 'new_input__' + getKey();

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
	const [flag, setFlag] = useState(false);

	const focusInput = () => {
		if (!modalVisible) return;

		const element = document.getElementById(flag ? newID : currentID);
		element?.focus();
	};

	const checkForFlag = () => {
		const resetPW = localStorage.getItem('Mary Wood - Reset Password Flag');
		if (!resetPW) return;

		setCurrentPW('password');
		setModalVisible(true);
		focusInput();
		setFlag(true);
	};

	const changePassword = async (event: SyntheticEvent) => {
		event.preventDefault();
		event.stopPropagation();

		if (newPW !== confirmPW) {
			setError(true);
			return;
		}

		setLoading(true);

		const passwordChanged = await API.changePW({ currentPW, newPW });
		console.log(passwordChanged);

		if (!passwordChanged) setFailed(true);

		setLoading(false);
		setModalVisible(false);

		if (!flag) return;

		localStorage.removeItem('Mary Wood - Reset Password Flag');
		setFlag(false);
	};

	const resetInputs = () => {
		setCurrentPW('');
		setNewPW('');
		setConfirmPW('');
		setError(false);
		setLoading(false);
		setFailed(false);
	};

	const clearError = () => setError(false);

	useEffect(resetInputs, [modalVisible]);
	useEffect(focusInput, [modalVisible]);
	useEffect(clearError, [currentPW, newPW, confirmPW]);
	useEffect(checkForFlag, []);

	const invalidInput = currentPW.length < 8 || newPW.length < 8 || confirmPW.length < 8 || newPW.includes('password');

	return (
		<Modal.Frame isVisible={flag || modalVisible} setIsVisible={setModalVisible}>
			<Modal.Header>
				<Modal.Title>Change Password</Modal.Title>

				<Modal.Caption>
					<p>Your password cannot be "password" silly goose.</p>
				</Modal.Caption>
			</Modal.Header>

			<Modal.Body>
				<div className={styles.requirements_container}>
					<p>Password must be</p>

					<p className={styles.requirement}>
						<strong>8 characters</strong> or more.
					</p>
				</div>

				<div className={styles.requirements_container}>
					<p>Password may contain any combination of</p>

					<p className={styles.requirement}>
						<strong>letters</strong>, <strong>numbers</strong>, and <strong>special characters</strong>.
					</p>
				</div>

				<Modal.Form onSubmit={changePassword}>
					<label>Current Password</label>
					<input type='password' placeholder='••••••••••••' name='current' id={currentID} value={currentPW} className={flag ? styles.disabled : ''} onChange={(e) => setCurrentPW(e.target.value)} />

					<label>New Password</label>
					<input type='password' placeholder='••••••••••••' name='new' id={newID} value={newPW} onChange={(e) => setNewPW(e.target.value)} />

					<label>Confirm New Password</label>
					<input type='password' placeholder='••••••••••••' name='confirm' value={confirmPW} onChange={(e) => setConfirmPW(e.target.value)} />

					<Modal.FormError visible={error} className={styles.error}>
						<p>Your new passwords don't match.</p>
						<p>Try typing them again.</p>
					</Modal.FormError>

					<Modal.FormError visible={loading} className={styles.loading}>
						<p>Changing password...</p>
					</Modal.FormError>

					<Modal.FormError visible={failed} className={styles.failed}>
						<p>Something went wrong...</p>
					</Modal.FormError>
				</Modal.Form>
			</Modal.Body>

			<Modal.Buttons>
				{!flag ? (
					<Button.UI type='secondary' onClick={() => setModalVisible(false)}>
						Cancel
					</Button.UI>
				) : null}

				<Button.UI className={invalidInput ? styles.invalid : ''} onClick={changePassword}>
					Change
				</Button.UI>
			</Modal.Buttons>
		</Modal.Frame>
	);
}
