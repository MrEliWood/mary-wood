import { Box, Flex, Grid, Container, Tabs } from '@radix-ui/themes';

import { Sidebar } from './_sections';
import { API } from '@/utils';

import styles from './page.module.css';

export default async function Dashboard() {
	const blogData = await API.getAllBlogs();

	return (
		<Flex className={styles.page}>
			<Flex className={styles.main}>
				<Sidebar blogData={blogData} />

				<Flex className={styles.editor}></Flex>
			</Flex>
		</Flex>
	);
}
