// external
import { Dispatch, SetStateAction, SyntheticEvent, useState } from 'react';
import { PlusIcon } from '@radix-ui/react-icons';

// internal
import { Button, UnsavedModal } from '@/components';
import { autosave } from '@/utils';

// state
import { setState, useDispatch } from '@/state';

type Props = {
	setMenuOpen: Dispatch<SetStateAction<boolean>>;
};

export default function NewButton({ setMenuOpen }: Props) {
	const [modalVisible, setModalVisible] = useState(false);
	const dispatch = useDispatch();

	const focusEditor = () => {
		const firstInput = document.querySelector('textarea');
		firstInput?.focus();
	};

	const newBlog = () => {
		dispatch(setState('newActiveBlog', null));
		setMenuOpen(false);
		focusEditor();
	};

	const handleNewButtonClick = async (event: SyntheticEvent) => {
		event.stopPropagation();

		const isSaved = await autosave();

		if (!isSaved) {
			setModalVisible(true);
			return;
		}

		newBlog();
	};

	return (
		<>
			<Button.UI style='ghost' onClick={handleNewButtonClick}>
				New
				<PlusIcon width='16' height='16' />
			</Button.UI>

			<UnsavedModal modalVisible={modalVisible} setModalVisible={setModalVisible} onConfirm={newBlog} />

			{/* <Modal.Frame isVisible={modalVisible} setIsVisible={setModalVisible}>
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

					<Button.UI type='danger' onClick={newBlog}>
						Continue Without Saving
					</Button.UI>
				</Modal.Buttons>
			</Modal.Frame> */}
		</>
	);
}
