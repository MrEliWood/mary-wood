import { Box, Flex, Grid, Container, Tabs } from '@radix-ui/themes';

import { Editor, Sidebar } from './_sections';
import { API } from '@/utils';

import styles from './page.module.css';

export default async function Dashboard() {
	const blogData = await API.getAllBlogs();
	const { drafts, published, deleted } = blogData;

	return (
		<Flex className={styles.page}>
			<Flex className={styles.main}>
				<Sidebar blogData={blogData} />

				<Editor blogData={blogData} />
			</Flex>
		</Flex>
	);
}
