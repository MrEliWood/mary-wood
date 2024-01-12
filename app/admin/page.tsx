'use client';

import { useState, useEffect, UIEvent } from 'react';
import useSWR from 'swr';

import { Editor, Menu, Sidebar } from './_sections';
import { API } from '@/utils';

import { useDispatch } from 'react-redux';
import { setState } from '@/states';

import styles from './_styles/page.module.css';

const editorId = 'editor';

export default function Dashboard() {
	const dispatch = useDispatch();

	const { data, error, isLoading } = useSWR('/api/blog', API.getAllBlogs);
	dispatch(setState('setAllBlogs', data));

	if (error) return <main>{error}</main>;
	if (isLoading) return <main>Loading...</main>;

	return (
		<main className={styles.main}>
			<Sidebar />
			<Editor />
			<Menu />
		</main>
	);
}
