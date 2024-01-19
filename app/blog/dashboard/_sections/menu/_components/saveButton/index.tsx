// external
import { Dispatch, SetStateAction, SyntheticEvent } from 'react';
import { FileIcon } from '@radix-ui/react-icons';

// internal
import { API } from '@/utils';
import { Button } from '../../../../_components';

// state
import { mutate } from 'swr';
import { getState } from '@/state';

type Props = {
	setMenuOpen: Dispatch<SetStateAction<boolean>>;
};

export default function SaveButton({ setMenuOpen }: Props) {
	const activeBlog = getState('activeBlog');

	const saveBlog = async (event: SyntheticEvent) => {
		event.stopPropagation();

		const { id, published } = activeBlog;

		if (id && !published) {
			await API.updateBlog(activeBlog);
		} else {
			await API.createBlog(activeBlog);
		}

		setMenuOpen(false);
		localStorage.removeItem('Mary Wood - Unsaved Blog');
		mutate('/api/blog');
	};

	return (
		<Button style='ghost' type='secondary' onClick={saveBlog}>
			Save
			<FileIcon width='16' height='16' />
		</Button>
	);
}
