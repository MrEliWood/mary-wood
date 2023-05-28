'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

import styles from './style.module.css';
import { Login } from '@/components';

export default function Footer() {
	const [loginVisible, setLoginVisible] = useState<boolean>(false);
	const [token, setToken] = useState<string | null>(null);

	useEffect(() => {
		const savedToken = localStorage.getItem('Mary_Wood_JWT');
		if (savedToken) setToken(savedToken);
	}, []);

	const handleLoginClick = () => {
		loginVisible ? setLoginVisible(false) : setLoginVisible(true);
	};

	const handleLogoutClick = () => {
		setToken(null);
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

			{loginVisible && <Login setLoginVisible={setLoginVisible} />}
		</footer>
	);
}
