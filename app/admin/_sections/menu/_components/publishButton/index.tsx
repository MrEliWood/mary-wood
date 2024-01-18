// external
import { useState, Dispatch, SetStateAction, SyntheticEvent } from 'react';
import { UploadIcon } from '@radix-ui/react-icons';

// internal
import { API } from '@/utils';
import { Button, Modal, ModalTitle, ModalHeader, ModalBody, ModalButtons } from '../../../../_components';

// state
import { mutate } from 'swr';
import { getState } from '@/state';

type Props = {
	setMenuOpen: Dispatch<SetStateAction<boolean>>;
};

export default function PublishButton({ setMenuOpen }: Props) {
	const [modalVisible, setModalVisible] = useState(false);
	const activeBlog = getState('activeBlog');

	const publishBlog = async (event: SyntheticEvent) => {
		event.stopPropagation();

		await API.publishBlog(activeBlog);

		setMenuOpen(false);
		localStorage.removeItem('Mary Wood - Unsaved Blog');
		mutate('/api/blog');
	};

	return (
		<>
			<Button style='ghost' type='success' onClick={() => setModalVisible(true)}>
				Publish
				<UploadIcon width='16' height='16' />
			</Button>

			<Modal isVisible={modalVisible} setIsVisible={setModalVisible}>
				<ModalHeader>
					<ModalTitle>Publish Blog</ModalTitle>
					<p>Are you sure you want to publish this blog?</p>
				</ModalHeader>

				<ModalBody>
					<p>I mean... don't get me wrong, it's great! The way you strung words together to make sentances... It's syntactical!</p>
					<p>Just want to double check you meant to click publish. Published blogs are visible on your website.</p>
				</ModalBody>

				<ModalButtons>
					<Button type='secondary' onClick={() => setModalVisible(false)}>
						Cancel
					</Button>

					<Button type='success' onClick={publishBlog}>
						Publish
					</Button>
				</ModalButtons>
			</Modal>
		</>
	);
}
