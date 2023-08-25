import Link from 'next/link';
import { usePathname } from 'next/navigation';

import styles from './style.module.css';

import { Work } from '@/types';

interface NavItem {
	text: string;
	link: string;
}

interface Props {
	prev: NavItem;
	next: NavItem;
}

export default function PageNav({ prev, next }: Props) {
	const pathname: string = usePathname();

	const pathArray = pathname.split('/');
	pathArray.pop();
	const pathString = pathArray.join('/');
	console.log(pathString);

	return (
		<nav className={styles.nav}>
			{prev && (
				<Link href={prev.link} className={`${styles.nav_item} ${styles.nav_item_prev}`}>
					<svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className={styles.chevron}>
						<path strokeLinecap='round' strokeLinejoin='round' d='M15.75 19.5L8.25 12l7.5-7.5' />
					</svg>

					<p>{prev.text}</p>
				</Link>
			)}

			{next && (
				<Link href={next.link} className={`${styles.nav_item} ${styles.nav_item_next}`}>
					<p>{next.text}</p>

					<svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className={styles.chevron}>
						<path strokeLinecap='round' strokeLinejoin='round' d='M8.25 4.5l7.5 7.5-7.5 7.5' />
					</svg>
				</Link>
			)}
		</nav>
	);
}
