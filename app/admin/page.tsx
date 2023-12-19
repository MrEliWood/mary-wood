import { Box, Flex, Grid, Container } from '@radix-ui/themes';

import styles from './page.module.css';

export default function Dashboard() {
	return (
		<Flex className={styles.page}>
			<Grid columns='2' className={styles.main}>
				<Flex className={styles.index}></Flex>
				<Flex className={styles.editor}></Flex>
			</Grid>
		</Flex>
	);
}
