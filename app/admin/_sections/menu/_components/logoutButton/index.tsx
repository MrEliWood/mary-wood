// external
import { Dispatch, SetStateAction, SyntheticEvent } from 'react';
import { FileIcon } from '@radix-ui/react-icons';

// internal
import { API } from '@/utils';
import { Button } from '../../../../_components';

// state
import { mutate } from 'swr';
import { getState } from '@/state';

export default function LogoutButton() {
	const logout = () => {};

	return (
		<Button style='ghost' type='secondary' onClick={logout}>
			Save
			<FileIcon width='16' height='16' />
		</Button>
	);
}
