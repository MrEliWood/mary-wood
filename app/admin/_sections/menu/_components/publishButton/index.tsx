// external
import { Dispatch, SetStateAction, SyntheticEvent } from 'react';
import { UploadIcon } from '@radix-ui/react-icons';

// internal
import { API } from '@/utils';
import { Button } from '../../../../_components';

// state
import { mutate } from 'swr';
import { getState } from '@/state';

type Props = {
	setMenuOpen: Dispatch<SetStateAction<boolean>>;
};

export default function PublishButton({ setMenuOpen }: Props) {
	const activeBlog = getState('activeBlog');

	const publishBlog = async (event: SyntheticEvent) => {
		event.stopPropagation();

		await API.publishBlog(activeBlog);

		setMenuOpen(false);
		localStorage.removeItem('Mary Wood - Unsaved Blog');
		mutate('/api/blog');
	};

	return (
		<Button style='ghost' type='success' onClick={publishBlog}>
			Publish
			<UploadIcon width='16' height='16' />
		</Button>
	);
}
