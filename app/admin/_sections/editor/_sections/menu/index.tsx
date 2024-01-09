'use client';

// external
import { useState } from 'react';
import { HamburgerMenuIcon, PlusIcon, Cross1Icon, TrashIcon, UploadIcon, FileIcon } from '@radix-ui/react-icons';

// internal
import { API } from '@/utils';
import { Button } from '../../../../_components';

// state
import { useSelector, useDispatch } from 'react-redux';
import type { RootState } from '@/redux/store';
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

	const activeBlog = useSelector((state: RootState) => state.activeBlog.value);
	const dispatch = useDispatch();

	const saveBlogDraft = () => {
		activeBlog.id ? API.updateBlog(activeBlog) : API.createBlog(activeBlog);
	};

	const createNewBlog = () => {
		dispatch(newActiveBlog());

		setIsOpen(false);

		const titleInput = document.getElementById(titleId) as HTMLInputElement;
		titleInput.focus();
	};

	return (
		<div className={`${styles.menu_container} ${isScrolled ? styles.scrolled : ''}`}>
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
