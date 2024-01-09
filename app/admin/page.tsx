'use client';

// import { useEffect } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';

import { Editor, Sidebar } from './_sections';
import { API } from '@/utils';

import { useDispatch } from 'react-redux';
import { setAllBlogs } from '@/redux';

import styles from './_styles/page.module.css';

const client = new QueryClient();

export default async function Dashboard() {
	return (
		<QueryClientProvider client={client}>
			<main className={styles.main}>
				<Sidebar />
				<Editor />
			</main>
		</QueryClientProvider>
	);
}
