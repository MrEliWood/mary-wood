'use client';

// internal
import { getKey } from '@/utils';
import { getState } from '@/state';
import { Thumbnail } from './_components';

// styles
import styles from './style.module.css';

// types
import type { BlogData } from '@/types';

type BlogsProps = {
	id: string;
};

type BlogFilter = {
	all: BlogData[];
	published: BlogData[];
	drafts: BlogData[];
	deleted: BlogData[];
};

export default function Blogs({ id }: BlogsProps) {
	const activeTab = getState('activeTab');
	const allBlogs = getState('allBlogs');

	const { drafts, published, deleted } = allBlogs;

	const filter: BlogFilter = {
		...allBlogs,
		all: [...drafts, ...published, ...deleted]
	};

	return (
		<div id={id} className={styles.blogs}>
			{filter[activeTab as keyof BlogFilter].map((blog) => {
				return <Thumbnail key={getKey()} blogData={blog} />;
			})}
		</div>
	);
}
