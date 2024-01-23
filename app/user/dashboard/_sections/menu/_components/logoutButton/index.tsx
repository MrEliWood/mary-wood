'use client';

// external
import { ExitIcon } from '@radix-ui/react-icons';
import { useRouter } from 'next/navigation';

// internal
import { Button } from '@/components';
import { API } from '@/utils';

// state
import { setState, useDispatch } from '@/state';

export default function LogoutButton() {
	const dispatch = useDispatch();
	const router = useRouter();

	const logout = () => {
		API.logout();

		dispatch(setState('logout'));

		router.push('/');
	};

	return (
		<Button.UI style='ghost' type='secondary' onClick={logout}>
			Logout
			<ExitIcon width='16' height='16' />
		</Button.UI>
	);
}
