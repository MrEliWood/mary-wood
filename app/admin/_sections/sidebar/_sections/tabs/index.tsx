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
};

function Tab({ isActive, onClick, children }: TabProps) {
	return (
		<Button style='ghost' className={`${styles.tab} ${isActive ? styles.active : ''}`} onClick={onClick}>
			{children}
		</Button>
	);
}

export default function Tabs({ activeTab, setActiveTab }: TabsProps) {
	return (
		<div className={styles.tabs}>
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
	);
}
