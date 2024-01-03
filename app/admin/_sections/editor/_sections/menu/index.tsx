'use client';

// external
import { useState } from 'react';
import { HamburgerMenuIcon, PlusIcon, Cross1Icon, TrashIcon, UploadIcon } from '@radix-ui/react-icons';

// internal
import { Button } from '../../../../_components';

// state
import { useDispatch } from 'react-redux';

import { newActiveBlog } from '@/redux/features/activeBlog';

// style
import styles from './style.module.css';

// types
type Props = {
	isScrolled: boolean;
	titleId: string;
};

export default function Menu({ isScrolled, titleId }: Props) {
	const [isOpen, setIsOpen] = useState(false);
	const dispatch = useDispatch();

	const createNewBlog = () => {
		dispatch(newActiveBlog());

		const titleInput = document.getElementById(titleId) as HTMLInputElement;
		titleInput.focus();
	};

	return (
		<div className={`${styles.menu_container} ${isScrolled ? styles.scrolled : ''} ${isOpen ? styles.open : ''}`} onClick={() => setIsOpen(!isOpen)}>
			<div className={styles.menu}>
				<Button style='danger'>
					<TrashIcon width='16' height='16' /> Delete
				</Button>

				<hr />

				<Button onClick={createNewBlog}>
					<PlusIcon width='16' height='16' /> New
				</Button>

				<Button style='success'>
					<UploadIcon width='16' height='16' /> Publish
				</Button>

				<Button style='ghost'>Save as Draft</Button>

				<hr />

				<div className={styles.menu_button_container}>
					<Button style='ghost' className={styles.menu_button}>
						<HamburgerMenuIcon width='20' height='20' className={`${styles.menu_button_icon} ${!isOpen ? styles.icon_visible : ''}`} />
						<Cross1Icon width='20' height='20' className={`${styles.menu_button_icon} ${isOpen ? styles.icon_visible : ''}`} />
					</Button>
				</div>
			</div>
		</div>
	);
}
