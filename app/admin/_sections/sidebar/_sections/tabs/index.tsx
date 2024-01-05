// external
import { Dispatch, SetStateAction } from 'react';
import { Button } from '../../../../_components';

// internal

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
	isScrolled: boolean;
};

function Tab({ isActive, onClick, children }: TabProps) {
	return (
		<Button style='ghost' type='secondary' className={`${styles.tab} ${isActive ? styles.active : ''}`} onClick={onClick}>
			{children}
		</Button>
	);
}

export default function Tabs({ activeTab, setActiveTab, isScrolled }: TabsProps) {
	return (
		<div className={styles.tabs_container}>
			<div className={`${styles.tabs} ${isScrolled ? styles.scrolled : ''}`}>
				<div className={styles.tabs_list}>
					<Tab isActive={activeTab === 'all'} onClick={() => setActiveTab('all')}>
						All
					</Tab>

					<hr />

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
			</div>
		</div>
	);
}
