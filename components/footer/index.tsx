'use client';

// external
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

// internal
import { Button } from '@/components';
import { API, links, workData } from '@/utils';

// state
import { getState } from '@/state';

// styles
import styles from './style.module.css';

export default function Footer() {
	const [loggedIn, setLoggedIn] = useState(false);
	const userData = getState('user');

	const pathname = usePathname();

	const checkForToken = () => {
		const verified = API.verifyToken();

		if (verified) {
			setLoggedIn(true);
		} else {
			setLoggedIn(false);
		}
	};

	useEffect(checkForToken, [userData]);

	const isAdminPage = pathname.includes('dashboard');
	const conditionalClass = isAdminPage ? styles.hidden_footer : '';

	return (
		<footer className={`${styles.footer} ${conditionalClass}`}>
			<div className={styles.footer_logo}>
				<h1 className={styles.footer_title}>Mary Elene Wood</h1>

				<div className={styles.footer_caption_container}>
					<h4 className={styles.footer_caption}>Writer.</h4>
					<h4 className={styles.footer_caption}>Teacher.</h4>
					<h4 className={styles.footer_caption}>Scholar.</h4>
				</div>
			</div>

			<div className={styles.footer_content}>
				<section className={styles.column}>
					<h3 className={styles.column_title}>Site Map</h3>

					<hr />

					<div className={styles.column_content}>
						<ul className={styles.column_content_section}>
							<li>
								<Link href='/'>Home</Link>
							</li>
							<li>
								<Link href='/writing'>Writing</Link>
							</li>
							<li>
								<Link href='/teaching'>Teaching</Link>
							</li>
							<li>
								<Link href='/blog'>Blog</Link>
							</li>
							<li>
								<Link href='/contact'>Contact</Link>
							</li>
							<li>
								<Link href='/bibliography'>Bibliography</Link>
							</li>
						</ul>
					</div>
				</section>

				<section className={styles.column}>
					<h3 className={styles.column_title}>External Sources</h3>

					<hr />

					<div className={styles.column_content}>
						<ul className={styles.column_content_section}>
							{workData.map((work) => {
								const { link } = work;
								if (!link) return;

								const key = Math.floor(Math.random() * 1000000);

								const linkArray = link.split('/');
								const linkText = linkArray[2];
								const href = 'http://' + linkText;

								return (
									<li key={key}>
										<Link href={href} target='_blank'>
											{linkText}
										</Link>
									</li>
								);
							})}
						</ul>
					</div>
				</section>

				<section className={styles.column}>
					<h3 className={styles.column_title}>Contact</h3>

					<hr />

					<div className={styles.column_content}>
						<div className={styles.column_content_section}>
							<Link href={links.phone}>(541) 346-3010</Link>
							<Link href={links.email}>mewood@uoregon.edu</Link>
						</div>

						<div className={styles.column_content_section}>
							<Link href='https://www.uoregon.edu' target='_blank'>
								uoregon.edu
							</Link>
						</div>
					</div>
				</section>

				<section className={styles.column}>
					<h3 className={styles.column_title}>Admin</h3>

					<hr />

					<div className={styles.column_content}>
						<div className={styles.column_content_section}>
							<p>© 2023 Mary Elene Wood.</p>
							<p>All Rights Reserved.</p>
						</div>

						<div className={styles.column_content_section}>
							<div className={styles.section_row}>
								<p>
									Website by{' '}
									<Link href='https://eliwooddesign.com' target='_blank'>
										Eli Wood
									</Link>
									.
								</p>
							</div>
						</div>

						<div className={styles.column_content_section}>
							<div className={styles.user_nav}>
								{loggedIn ? (
									<Link href='/user/dashboard' className='hidden_link'>
										<Button.Primary>Dashboard</Button.Primary>
									</Link>
								) : (
									<Link href='/user/login' className='hidden_link'>
										<Button.Primary className={styles.button}>Login</Button.Primary>
									</Link>
								)}
							</div>
						</div>
					</div>
				</section>
			</div>
		</footer>
	);
}
