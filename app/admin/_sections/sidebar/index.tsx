'use client';

import { Text, Box, Flex, Grid, Container, Tabs, ScrollArea, Separator } from '@radix-ui/themes';

import { Thumbnail } from '../../_components';

import styles from './style.module.css';

import type { Blogs } from '@/types';

type Props = {
	blogData: Blogs;
};

export default function Sidebar({ blogData }: Props) {
	const { published, drafts, deleted } = blogData;

	const allBlogs = [...published, ...drafts, ...deleted];

	return (
		<Tabs.Root defaultValue='all'>
			<section className={styles.section}>
				<div className={styles.tabs}>
					<Tabs.List className={styles.tabs_list}>
						<Tabs.Trigger value='all'>All</Tabs.Trigger>

						<Separator orientation='vertical' />

						<Tabs.Trigger value='published'>Published</Tabs.Trigger>
						<Tabs.Trigger value='drafts'>Drafts</Tabs.Trigger>
						<Tabs.Trigger value='deleted'>Deleted</Tabs.Trigger>
					</Tabs.List>
				</div>

				<div className={styles.content}>
					<Tabs.Content value='all'>
						{allBlogs.map((blog) => {
							return <Thumbnail blogData={blog} />;
						})}
					</Tabs.Content>

					<Tabs.Content value='published'>
						{published.map((blog) => {
							return <Thumbnail blogData={blog} />;
						})}
					</Tabs.Content>

					<Tabs.Content value='drafts'>
						{drafts.map((blog) => {
							return <Thumbnail blogData={blog} />;
						})}
					</Tabs.Content>

					<Tabs.Content value='deleted'>
						{deleted.map((blog) => {
							return <Thumbnail blogData={blog} />;
						})}
					</Tabs.Content>
				</div>
			</section>
		</Tabs.Root>
	);
}
