import { API } from '@/utils';

import styles from './page.module.css';

import { BlogType } from '@/types';

type Props = {
	params: { id: number };
};

export default async function BlogPage({ params }: Props) {
	const blogData: BlogType = await API.getOneBlog(params.id);

	const { caption, createdAt, id, images, text, title, updatedAt, publishedAt } = blogData;

	return <main className={styles.page}>{<h1>{title}</h1>}</main>;
}
