// external
import { Dispatch, SetStateAction, SyntheticEvent } from 'react';
import { PlusIcon } from '@radix-ui/react-icons';

// internal
import { Button } from '../../../../_components';

// state
import { setState, useDispatch } from '@/state';

type Props = {
	setMenuOpen: Dispatch<SetStateAction<boolean>>;
};

export default function NewButton({ setMenuOpen }: Props) {
	const dispatch = useDispatch();

	const focusEditor = () => {
		const firstInput = document.querySelector('textarea');
		firstInput?.focus();
	};

	const newBlog = (event: SyntheticEvent) => {
		event.stopPropagation();

		dispatch(setState('newActiveBlog', null));

		setMenuOpen(false);
		localStorage.removeItem('Mary Wood - Unsaved Blog');
		focusEditor();
	};

	return (
		<Button style='ghost' onClick={newBlog}>
			New
			<PlusIcon width='16' height='16' />
		</Button>
	);
}
