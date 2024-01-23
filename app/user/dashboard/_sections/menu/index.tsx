'use client';

// external
import { useState, useEffect, SyntheticEvent } from 'react';
import { HamburgerMenuIcon, Cross1Icon } from '@radix-ui/react-icons';
import { mutate } from 'swr';

// internal
import { Button } from '@/components';
import { CPWButton, DeleteButton, LogoutButton, NewButton, PublishButton, SaveButton } from './_components';

// state
import { getState } from '@/state';

// style
import styles from './style.module.css';

export default function Menu() {
	const [isOpen, setIsOpen] = useState(false);
	const editorScrolled = getState('editorScrolled');

	const handleMenuClick = (event: SyntheticEvent) => {
		event.stopPropagation();
	};

	const handleWindowclicks = () => {
		setIsOpen(false);
	};

	const listenForClicks = () => {
		window.addEventListener('click', handleWindowclicks);
		return () => window.removeEventListener('click', handleWindowclicks);
	};

	const validateData = () => {
		mutate('/api/blog');
	};

	useEffect(listenForClicks, []);
	useEffect(validateData, [isOpen]);

	return (
		<div className={`${styles.menu_container} ${editorScrolled ? styles.scrolled : ''}`} onClick={handleMenuClick}>
			<div className={`${styles.menu_accordian} ${isOpen ? styles.open : ''}`}>
				<div className={styles.menu}>
					<Button.UI style='ghost' type='secondary' className={styles.menu_icon} onClick={() => setIsOpen(!isOpen)}>
						<HamburgerMenuIcon width='18' height='18' className={`${styles.menu_icon_icon} ${!isOpen ? styles.icon_visible : ''}`} />
						<Cross1Icon width='18' height='18' className={`${styles.menu_icon_icon} ${isOpen ? styles.icon_visible : ''}`} />
					</Button.UI>

					<hr />

					<div className={styles.menu_button_container}>
						<SaveButton setMenuOpen={setIsOpen} />
						<NewButton setMenuOpen={setIsOpen} />
						<PublishButton setMenuOpen={setIsOpen} />
						<DeleteButton setMenuOpen={setIsOpen} />
					</div>

					<hr />

					<div className={styles.menu_button_container}>
						<CPWButton />
						<LogoutButton />
					</div>
				</div>
			</div>
		</div>
	);
}
