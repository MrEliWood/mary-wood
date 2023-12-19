'use client';

import { Text, Box, Flex, Grid, Container, Tabs, ScrollArea, Separator } from '@radix-ui/themes';

import styles from './style.module.css';

import type { Blogs } from '@/types';

type Props = {
	blogData: Blogs;
};

export default function Sidebar({ blogData }: Props) {
	const { published, drafts, deleted } = blogData;
	const allBlogs = [...published, ...drafts, ...deleted];
	return (
		<Flex direction='column' className={styles.section}>
			<Tabs.Root defaultValue='all' className={styles.tab_root}>
				<Tabs.List className={styles.tab_list}>
					<Tabs.Trigger value='all'>All</Tabs.Trigger>
					<Separator orientation='vertical' />
					<Tabs.Trigger value='published'>Published</Tabs.Trigger>
					<Separator orientation='vertical' />
					<Tabs.Trigger value='drafts'>Drafts</Tabs.Trigger>
					<Separator orientation='vertical' />
					<Tabs.Trigger value='deleted'>Deleted</Tabs.Trigger>
				</Tabs.List>

				<ScrollArea type='always' size='2' scrollbars='vertical' className={styles.scroll_area}>
					<Flex direction='column' className={styles.index}>
						{allBlogs.map((blog) => {
							return (
								<Flex direction='column' p='5' className={styles.blog_preview}>
									<Text weight='bold'>{blog.title}</Text>
									<Text size='2' color='gray'>
										{blog.caption}
									</Text>
								</Flex>
							);
						})}
					</Flex>
				</ScrollArea>
			</Tabs.Root>
		</Flex>
	);
}
