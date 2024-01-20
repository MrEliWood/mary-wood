'use client';

// external
import { ExitIcon } from '@radix-ui/react-icons';

// internal
import { Button } from '@/components';
import { useRouter } from 'next/navigation';

export default function LogoutButton() {
	const router = useRouter();

	const logout = () => {
		localStorage.removeItem('Mary_Wood_JWT');
		localStorage.removeItem('Mary_Wood_User');
		router.push('/');
	};

	return (
		<Button.UI style='ghost' type='secondary' onClick={logout}>
			Logout
			<ExitIcon width='16' height='16' />
		</Button.UI>
	);
}
