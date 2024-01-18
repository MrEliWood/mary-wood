// external
import { useState, Dispatch, SetStateAction, SyntheticEvent } from 'react';
import { TrashIcon } from '@radix-ui/react-icons';

// internal
import { API } from '@/utils';
import { Button, Modal, ModalTitle, ModalHeader, ModalBody, ModalButtons } from '../../../../_components';

// state
import { mutate } from 'swr';
import { getState } from '@/state';

type Props = {
	setMenuOpen: Dispatch<SetStateAction<boolean>>;
};

export default function DeleteButton({ setMenuOpen }: Props) {
	const [modalVisible, setModalVisible] = useState(true);
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
			<Button style='ghost' type='danger' onClick={() => setModalVisible(true)}>
				Delete
				<TrashIcon width='16' height='16' />
			</Button>

			<Modal isVisible={modalVisible} setIsVisible={setModalVisible}>
				<ModalHeader>
					<ModalTitle>Delete Blog</ModalTitle>
					<p>Are you sure you want to delete this blog?</p>
				</ModalHeader>

				<ModalBody>
					<p>Deleted blogs will be removed from your website but still accessible from this dashboard.</p>
				</ModalBody>

				<ModalButtons>
					<Button type='secondary' onClick={() => setModalVisible(false)}>
						Cancel
					</Button>

					<Button type='danger' onClick={deleteBlog}>
						Delete
					</Button>
				</ModalButtons>
			</Modal>
		</>
	);
}
