// external
import { Dispatch, MouseEventHandler, SetStateAction } from 'react';

// internal
import { Button, Modal } from '@/components';

// types
type Props = {
	modalVisible: boolean;
	setModalVisible: Dispatch<SetStateAction<boolean>>;
	onConfirm: MouseEventHandler<HTMLButtonElement>;
};

export default function UnsavedModal({ modalVisible, setModalVisible, onConfirm }: Props) {
	return (
		<Modal.Frame isVisible={modalVisible} setIsVisible={setModalVisible}>
			<Modal.Header>
				<Modal.Title>Unsaved Changes</Modal.Title>
				<Modal.Caption>Something went wrong... Autosave was unsuccessful.</Modal.Caption>
			</Modal.Header>

			<Modal.Body>
				<p>You made changes that couldn't be saved automatically. If you continue, your current changes will be lost.</p>
			</Modal.Body>

			<Modal.Buttons>
				<Button.UI type='secondary' onClick={() => setModalVisible(false)}>
					Cancel
				</Button.UI>

				<Button.UI type='danger' onClick={onConfirm}>
					Continue Without Saving
				</Button.UI>
			</Modal.Buttons>
		</Modal.Frame>
	);
}
