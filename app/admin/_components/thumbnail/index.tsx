'use client';

import { Text, Heading, Box, Flex, Grid, Container, Tabs, ScrollArea, Separator } from '@radix-ui/themes';
import dayjs from 'dayjs';

import styles from './style.module.css';

import type { BlogType } from '@/types';

type Props = {
	blogData: BlogType;
};

export default function Thumbnail({ blogData }: Props) {
	const { title, caption, text, publishedAt } = blogData;

	const month = dayjs(publishedAt).format('MM');
	const day = dayjs(publishedAt).format('DD');
	const year = dayjs(publishedAt).format('YYYY');

	return (
		<div className={styles.thumbnail}>
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
