// external
import { useState, Dispatch, SetStateAction, SyntheticEvent } from 'react';
import { UploadIcon } from '@radix-ui/react-icons';

// internal
import { API } from '@/utils';
import { Button, Modal } from '@/components';

// state
import { getState, setState, useDispatch } from '@/state';

type Props = {
	setMenuOpen: Dispatch<SetStateAction<boolean>>;
};

export default function PublishButton({ setMenuOpen }: Props) {
	const [modalVisible, setModalVisible] = useState(false);
	const activeBlog = getState('activeBlog');
	const allBlogs = getState('allBlogs');
	const dispatch = useDispatch();

	const publishBlog = async (event: SyntheticEvent) => {
		event.stopPropagation();

		const publishedBlog = await API.publishBlog(activeBlog);
		if (!publishedBlog) return;

		setModalVisible(false);
		setMenuOpen(false);
	};

	return (
		<>
			<Button.UI style='ghost' type='success' onClick={() => setModalVisible(true)}>
				Publish
				<UploadIcon width='16' height='16' />
			</Button.UI>

			<Modal.Frame isVisible={modalVisible} setIsVisible={setModalVisible}>
				<Modal.Header>
					<Modal.Title>Publish Blog</Modal.Title>
					<p>Are you sure you want to publish this blog?</p>
				</Modal.Header>

				<Modal.Body>
					<p>I mean... don't get me wrong, it's great! The way you strung words together to make sentances... It's syntactical!</p>
					<p>Just want to double check you meant to click publish. Published blogs are visible on your website.</p>
				</Modal.Body>

				<Modal.Buttons>
					<Button.UI type='secondary' onClick={() => setModalVisible(false)}>
						Cancel
					</Button.UI>

					<Button.UI type='success' onClick={publishBlog}>
						Publish
					</Button.UI>
				</Modal.Buttons>
			</Modal.Frame>
		</>
	);
}
