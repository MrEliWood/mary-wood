'use client';

import { useEffect, Dispatch, SetStateAction } from 'react';
import { Text, Box, Flex, Grid, Container, Tabs, ScrollArea, Separator } from '@radix-ui/themes';

import { Thumbnail } from '../../_components';
import { getKey } from '@/utils';

import { useSelector, useDispatch } from 'react-redux';
import type { RootState } from '@/redux/store';
import { setActiveBlog } from '@/redux/features/activeBlog';

import styles from './style.module.css';

import type { Blogs } from '@/types';

type Props = {
	blogData: Blogs;
};

export default function Sidebar({ blogData }: Props) {
	const { drafts, published, deleted } = blogData;
	const activeBlog = useSelector((state: RootState) => state.activeBlog.value);
	const dispatch = useDispatch();

	const allBlogs = [...drafts, ...published, ...deleted];

	useEffect(() => {
		dispatch(setActiveBlog(drafts[0] || published[0] || deleted[0]));
	}, []);

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
							return <Thumbnail key={getKey()} blogData={blog} />;
						})}
					</Tabs.Content>

					<Tabs.Content value='published'>
						{published.map((blog) => {
							return <Thumbnail key={getKey()} blogData={blog} />;
						})}
					</Tabs.Content>

					<Tabs.Content value='drafts'>
						{drafts.map((blog) => {
							return <Thumbnail key={getKey()} blogData={blog} />;
						})}
					</Tabs.Content>

					<Tabs.Content value='deleted'>
						{deleted.map((blog) => {
							return <Thumbnail key={getKey()} blogData={blog} />;
						})}
					</Tabs.Content>
				</div>
			</section>
		</Tabs.Root>
	);
}
