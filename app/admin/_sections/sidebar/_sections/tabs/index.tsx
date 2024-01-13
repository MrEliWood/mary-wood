// external
import { Dispatch, SetStateAction, MouseEvent } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';

// internal
import { getKey } from '@/utils';
import { Button } from '../../../../_components';

// state
import { getState, setState, useDispatch } from '@/state';

// style
import styles from './style.module.css';

// types
type TabsProps = {
	isHidden: boolean;
	setIsHidden: Dispatch<SetStateAction<boolean>>;
	isScrolled: boolean;
};

// variables
const tabs = ['all', 'drafts', 'published', 'deleted'];

export default function Tabs({ isHidden, setIsHidden, isScrolled }: TabsProps) {
	const activeTab = getState('activeTab');
	const dispatch = useDispatch();

	const handleTabClick = (event: MouseEvent) => {
		const element = event.target as HTMLButtonElement;
		const { name } = element;

		dispatch(setState('setActiveTab', name));
	};

	return (
		<div className={styles.tabs_section}>
			<div className={`${styles.tabs_container} ${isScrolled ? styles.scrolled : ''} ${isHidden ? styles.hidden : ''}`}>
				<div className={styles.tabs_content}>
					<Button style='ghost' type='secondary' className={`${styles.show_hide_button} ${styles.hide}`} onClick={() => setIsHidden(true)}>
						<ChevronLeftIcon className={styles.chevron} />
					</Button>

					<p className={styles.hide_button_text}>Hide Blogs</p>

					<div className={styles.tabs}>
						{tabs.map((tab) => {
							const isActive = activeTab === tab;

							return (
								<Button key={getKey()} style='ghost' type='secondary' name={tab} className={`${styles.tab} ${isActive ? styles.active : ''}`} onClick={handleTabClick}>
									{tab}
								</Button>
							);
						})}
					</div>

					<div className={styles.show_container}>
						<Button style='ghost' type='secondary' className={`${styles.show_hide_button} ${styles.show}`} onClick={() => setIsHidden(false)}>
							<ChevronRightIcon className={styles.chevron} />
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
}
