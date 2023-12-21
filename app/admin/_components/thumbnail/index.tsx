'use client';

import { Text, Heading, Box, Flex, Grid, Container, Tabs, ScrollArea, Separator } from '@radix-ui/themes';
import dayjs from 'dayjs';

import { useSelector, useDispatch } from 'react-redux';
import type { RootState } from '@/redux/store';
import { setActiveBlog } from '@/redux/features/activeBlog';

import styles from './style.module.css';

import type { BlogType } from '@/types';

type Props = {
	blogData: BlogType;
};

export default function Thumbnail({ blogData }: Props) {
	const { id, title, caption, text, publishedAt } = blogData;
	const activeBlog = useSelector((state: RootState) => state.activeBlog.value);
	const dispatch = useDispatch();

	const month = dayjs(publishedAt).format('MM');
	const day = dayjs(publishedAt).format('DD');
	const year = dayjs(publishedAt).format('YYYY');

	const handleClick = () => {
		dispatch(setActiveBlog(blogData));
	};

	return (
		<div className={`${styles.thumbnail} ${id === activeBlog.id ? styles.active : ''}`} onClick={handleClick}>
			<div className={styles.row}>
				<Text weight='bold'>{title}</Text>

				<Text size='2' color='gray' className={styles.date}>
					{month}
					<span>/</span>
					{day}
					<span>/</span>
					{year}
				</Text>
			</div>

			<Text size='2' weight='medium'>
				{caption}
			</Text>

			<Text size='2' color='gray'>
				{text}
			</Text>
		</div>
	);
}
