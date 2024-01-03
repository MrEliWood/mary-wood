import { Editor, Sidebar } from './_sections';
import { API } from '@/utils';

import styles from './_styles/page.module.css';

export default async function Dashboard() {
	const blogData = await API.getAllBlogs();

	return (
		<main className={styles.main}>
			<Sidebar blogData={blogData} />
			<Editor />
		</main>
	);
}
