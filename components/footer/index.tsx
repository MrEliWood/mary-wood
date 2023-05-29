'use client';

import { useEffect } from 'react';
import Link from 'next/link';

import { useSelector, useDispatch } from 'react-redux';
import type { RootState } from '@/redux/store';
import { createToken, destroyToken } from '@/redux/features/token';
import { showLogin, hideLogin } from '@/redux/features/loginVisible';

import styles from './style.module.css';
import { Login } from '@/components';

export default function Footer() {
	const token = useSelector((state: RootState) => state.token.value);
	const loginVisible = useSelector((state: RootState) => state.loginVisible.value);
	const dispatch = useDispatch();

	useEffect(() => {
		const savedToken = localStorage.getItem('Mary_Wood_JWT');
		if (savedToken) dispatch(createToken(savedToken));
	}, []);

	const handleLoginClick = () => {
		loginVisible ? dispatch(hideLogin()) : dispatch(showLogin());
	};

	const handleLogoutClick = () => {
		dispatch(destroyToken());
		localStorage.removeItem('Mary_Wood_JWT');
	};

	return (
		<footer className={styles.footer}>
			<Link href='/bibliography' className={styles.site_title}>
				<p>Bibliography</p>
			</Link>

			{token ? (
				<div className={styles.user_nav}>
					<Link href='/cpw'>
						<button>Change Password</button>
					</Link>
					<button onClick={handleLogoutClick}>Logout</button>
				</div>
			) : (
				<button onClick={handleLoginClick}>Login</button>
			)}

			{loginVisible && <Login />}
		</footer>
	);
}
