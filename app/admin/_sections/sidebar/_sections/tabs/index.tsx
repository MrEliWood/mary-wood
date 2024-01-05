// external
import { Dispatch, SetStateAction } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@radix-ui/react-icons';

// internal
import { Button } from '../../../../_components';

// style
import styles from './style.module.css';

// types
type TabProps = {
	isActive: boolean;
	onClick?: () => void;
	children: React.ReactNode;
};

type TabsProps = {
	activeTab: string;
	setActiveTab: Dispatch<SetStateAction<string>>;
	isHidden: boolean;
	setIsHidden: Dispatch<SetStateAction<boolean>>;
	isScrolled: boolean;
};

function Tab({ isActive, onClick, children }: TabProps) {
	return (
		<Button style='ghost' type='secondary' className={`${styles.tab} ${isActive ? styles.active : ''}`} onClick={onClick}>
			{children}
		</Button>
	);
}

export default function Tabs({ activeTab, setActiveTab, isHidden, setIsHidden, isScrolled }: TabsProps) {
	return (
		<div className={styles.tabs_container}>
			<div className={`${styles.tabs} ${isScrolled ? styles.scrolled : ''} ${isHidden ? styles.hidden : ''}`}>
				<div className={styles.hide_button_container}>
					<Button style='ghost' type='secondary' className={styles.hide_button} onClick={() => setIsHidden(true)}>
						<ChevronLeftIcon width='24' height='24' className={styles.chevron} />
					</Button>

					<p className={styles.hide_button_text}>Hide Blogs</p>

					<hr />
				</div>

				<div className={styles.tabs_list}>
					<Tab isActive={activeTab === 'all'} onClick={() => setActiveTab('all')}>
						All
					</Tab>

					{/* <hr /> */}

					<Tab isActive={activeTab === 'drafts'} onClick={() => setActiveTab('drafts')}>
						Drafts
					</Tab>

					<Tab isActive={activeTab === 'published'} onClick={() => setActiveTab('published')}>
						Published
					</Tab>

					<Tab isActive={activeTab === 'deleted'} onClick={() => setActiveTab('deleted')}>
						Deleted
					</Tab>
				</div>

				{/* <div className={styles.show_button_container}>
					<Button style='ghost' type='secondary' className={styles.show_button}>
						<ChevronRightIcon width='24' height='24' className={styles.chevron} />
					</Button>
				</div> */}
			</div>
		</div>
	);
}
