// external
import { Dispatch, SetStateAction, SyntheticEvent } from 'react';
import { FileIcon } from '@radix-ui/react-icons';

// internal
import { API } from '@/utils';
import { Button } from '@/components';

// state
import { getState } from '@/state';

type Props = {
	setMenuOpen: Dispatch<SetStateAction<boolean>>;
};

export default function SaveButton({ setMenuOpen }: Props) {
	const activeBlog = getState('activeBlog');

	const saveBlog = async (event: SyntheticEvent) => {
		event.stopPropagation();

		const savedBlog = await API.saveBlog(activeBlog);
		if (!savedBlog) return;

		setMenuOpen(false);
		localStorage.removeItem('Mary Wood - Unsaved Blog');
	};

	return (
		<Button.UI style='ghost' type='secondary' onClick={saveBlog}>
			Save
			<FileIcon width='16' height='16' />
		</Button.UI>
	);
}
