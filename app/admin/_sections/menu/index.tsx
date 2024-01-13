'use client';

// external
import { useState } from 'react';
import { mutate } from 'swr';
import { HamburgerMenuIcon, PlusIcon, Cross1Icon, TrashIcon, UploadIcon, FileIcon } from '@radix-ui/react-icons';

// internal
import { API } from '@/utils';
import { Button } from '../../_components';

// state
import { getState, setState, useDispatch } from '@/state';

// style
import styles from './style.module.css';

export default function Menu() {
	const [isOpen, setIsOpen] = useState(false);

	const activeBlog = getState('activeBlog');
	const editorScrolled = getState('editorScrolled');

	const dispatch = useDispatch();

	const saveBlogDraft = async () => {
		console.log(activeBlog);
		activeBlog.id ? await API.updateBlog(activeBlog) : await API.createBlog(activeBlog);

		setIsOpen(false);

		mutate('/api/blog');
	};

	const createNewBlog = () => {
		dispatch(setState('newActiveBlog', null));

		setIsOpen(false);

		const firstInput = document.querySelector('textarea');
		firstInput?.focus();
	};

	return (
		<div className={`${styles.menu_container} ${editorScrolled ? styles.scrolled : ''}`}>
			<div className={`${styles.menu_accordian} ${isOpen ? styles.open : ''}`}>
				<div className={styles.menu}>
					<Button style='ghost' type='secondary' className={styles.menu_icon} onClick={() => setIsOpen(!isOpen)}>
						<HamburgerMenuIcon width='18' height='18' className={`${styles.menu_icon_icon} ${!isOpen ? styles.icon_visible : ''}`} />
						<Cross1Icon width='18' height='18' className={`${styles.menu_icon_icon} ${isOpen ? styles.icon_visible : ''}`} />
					</Button>

					<hr />

					<div className={styles.menu_button_container}>
						<Button style='ghost' type='secondary' onClick={saveBlogDraft}>
							Save
							<FileIcon width='16' height='16' />
						</Button>

						<Button style='ghost' onClick={createNewBlog}>
							New
							<PlusIcon width='16' height='16' />
						</Button>

						<Button style='ghost' type='success'>
							Publish
							<UploadIcon width='16' height='16' />
						</Button>

						<Button style='ghost' type='danger'>
							Delete
							<TrashIcon width='16' height='16' />
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
}
