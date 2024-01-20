// external
import { useState, Dispatch, SetStateAction, SyntheticEvent } from 'react';
import { TrashIcon } from '@radix-ui/react-icons';

// internal
import { API } from '@/utils';
import { Button, Modal } from '@/components';

// state
import { mutate } from 'swr';
import { getState } from '@/state';

type Props = {
	setMenuOpen: Dispatch<SetStateAction<boolean>>;
};

export default function DeleteButton({ setMenuOpen }: Props) {
	const [modalVisible, setModalVisible] = useState(false);
	const activeBlog = getState('activeBlog');

	const deleteBlog = async (event: SyntheticEvent) => {
		event.stopPropagation();

		await API.deleteBlog(activeBlog);

		setMenuOpen(false);
		localStorage.removeItem('Mary Wood - Unsaved Blog');
		mutate('/api/blog');
	};

	return (
		<>
			<Button.UI style='ghost' type='danger' onClick={() => setModalVisible(true)}>
				Delete
				<TrashIcon width='16' height='16' />
			</Button.UI>

			<Modal.Frame isVisible={modalVisible} setIsVisible={setModalVisible}>
				<Modal.Header>
					<Modal.Title>Delete Blog</Modal.Title>
					<p>Are you sure you want to delete this blog?</p>
				</Modal.Header>

				<Modal.Body>
					<p>Deleted blogs will be removed from your website but still accessible from this dashboard.</p>
				</Modal.Body>

				<Modal.Buttons>
					<Button.UI type='secondary' onClick={() => setModalVisible(false)}>
						Cancel
					</Button.UI>

					<Button.UI type='danger' onClick={deleteBlog}>
						Delete
					</Button.UI>
				</Modal.Buttons>
			</Modal.Frame>
		</>
	);
}
