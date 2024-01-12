'use client';

import { useDispatch } from 'react-redux';
import { showBlogForm } from '@/states/features/blogFormVisible';

export default function BlogCreate() {
	const dispatch = useDispatch();

	const handleButtonClick = () => {
		dispatch(showBlogForm());
	};

	return (
		<button onClick={handleButtonClick}>
			Create Post
			<svg width='14.502' height='14.5107'>
				<g>
					<rect height='14.5107' opacity='0' width='14.502' x='0' y='0' />
					<path d='M0 7.25098C0 7.68164 0.360352 8.0332 0.782227 8.0332L6.46875 8.0332L6.46875 13.7197C6.46875 14.1416 6.82031 14.502 7.25098 14.502C7.68164 14.502 8.04199 14.1416 8.04199 13.7197L8.04199 8.0332L13.7197 8.0332C14.1416 8.0332 14.502 7.68164 14.502 7.25098C14.502 6.82031 14.1416 6.45996 13.7197 6.45996L8.04199 6.45996L8.04199 0.782227C8.04199 0.360352 7.68164 0 7.25098 0C6.82031 0 6.46875 0.360352 6.46875 0.782227L6.46875 6.45996L0.782227 6.45996C0.360352 6.45996 0 6.82031 0 7.25098Z' fillOpacity='0.85' />
				</g>
			</svg>
		</button>
	);
}
