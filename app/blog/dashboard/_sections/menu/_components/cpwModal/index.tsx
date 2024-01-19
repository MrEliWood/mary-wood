// external
import { useState, useEffect, SyntheticEvent, Dispatch, SetStateAction } from 'react';
import { useRouter } from 'next/navigation';

// internal
import { Button, Modal, ModalBody, ModalButtons, ModalForm, ModalFormError, ModalHeader, ModalTitle } from '../../../../_components';
import { API, getKey } from '@/utils';

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

	if (failed) {
		return (
			<Modal isVisible={modalVisible} setIsVisible={setModalVisible}>
				<ModalHeader>
					<ModalTitle>Something went wrong...</ModalTitle>
				</ModalHeader>
			</Modal>
		);
	}

	if (loading) {
		return (
			<Modal isVisible={modalVisible} setIsVisible={setModalVisible}>
				<ModalHeader>
					<ModalTitle>Changing password...</ModalTitle>
				</ModalHeader>
			</Modal>
		);
	}

	return (
		<Modal isVisible={modalVisible} setIsVisible={setModalVisible}>
			<ModalHeader>
				<ModalTitle>Change Password</ModalTitle>

				<div>
					<p>You will need to login again</p>
					<p>with your new password.</p>
				</div>
			</ModalHeader>

			<ModalBody>
				<ModalForm>
					<div>
						<p>Current Password</p>
						<input type='password' placeholder='••••••••••••' name='current' id={currentID} value={currentPW} onChange={(e) => setCurrentPW(e.target.value)} />
					</div>

					<div>
						<p>New Password</p>
						<input type='password' placeholder='••••••••••••' name='new' value={newPW} onChange={(e) => setNewPW(e.target.value)} />
					</div>

					<div>
						<p>Confirm New Password</p>
						<input type='password' placeholder='••••••••••••' name='confirm' value={confirmPW} onChange={(e) => setConfirmPW(e.target.value)} />
					</div>
				</ModalForm>

				<ModalFormError error={error}>
					<p>Your new passwords don't match.</p>
					<p>Try typing them again.</p>
				</ModalFormError>

				<ModalButtons>
					<Button type='secondary' onClick={() => setModalVisible(false)}>
						Cancel
					</Button>

					<Button onClick={changePassword}>Change</Button>
				</ModalButtons>
			</ModalBody>
		</Modal>
	);
}
