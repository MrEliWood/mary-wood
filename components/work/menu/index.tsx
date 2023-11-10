'use client';

import { Dispatch, SetStateAction } from 'react';

import Link from 'next/link';

import { workData, workCategories } from '@/utils';

import styles from './style.module.css';

type Props = {
	visibleWork: string;
	setVisibleWork: Dispatch<SetStateAction<string>>;
};

const component_id = 'writing_menu';

export default function Menu(props: Props) {
	const { visibleWork, setVisibleWork } = props;

	const getElementPosition = (id: string) => {
		const htmlElement = document.getElementById(id);
		if (!htmlElement) return;

		const position = htmlElement.getBoundingClientRect().top;
		if (!position) return;

		return position;
	};

	const handleClick = (id: string) => {
		const position = getElementPosition(id) || 0;
		const paddingTop = getElementPosition(component_id) || 0;
		const scrollTo = position - paddingTop;

		console.log(position, paddingTop);

		window.scrollTo(0, scrollTo);
	};

	return (
		<aside id={component_id} className={styles.component}>
			<div className={styles.menu}>
				{workCategories.map((category) => {
					const key = Math.floor(Math.random() * 1000000);

					return (
						<ul key={key} className={styles.category}>
							<h4 className={styles.category_name}>{category.name}</h4>

							{workData.map((work) => {
								const key = Math.floor(Math.random() * 1000000);

								const active = visibleWork === work.id;

								return (
									work.category === category.name && (
										<li key={key} id={work.id} className={`button_text ${styles.menu_item} ${active && styles.active}`} onClick={() => handleClick(work.id)}>
											{work.title}
										</li>
									)
								);
							})}
						</ul>
					);
				})}
			</div>
		</aside>
	);
}
