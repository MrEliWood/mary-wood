'use client';

// external
import { useEffect, SyntheticEvent, ChangeEventHandler, ChangeEvent } from 'react';

// internal
import { getKey } from '@/utils';

// style
import styles from './style.module.css';

// types
type Props = {
	name: string;
	value: string;
	placeholder?: string;
	onChange: ({ name, value }: { name: string; value: string }) => void;
	preventLineBreaks?: boolean;
	className?: string;
};

// variables
const id = 'input__' + getKey();

export default function TextArea({ name, value, placeholder = '', onChange, preventLineBreaks = false, className = '' }: Props) {
	const adjustInputHeight = (element: HTMLTextAreaElement) => {
		element.style.height = '1px';
		element.style.height = element.scrollHeight + 'px';
	};

	const handleInputChange = (event: SyntheticEvent) => {
		const element = event.target as HTMLTextAreaElement;
		adjustInputHeight(element);

		console.log(event);

		onChange(event as ChangeEvent<HTMLTextAreaElement>);
	};

	const handleKeyPress = (event: KeyboardEvent) => {
		const element = event.target as HTMLTextAreaElement;
		adjustInputHeight(element);

		console.log(event);

		onChange(event);
	};

	useEffect(() => {
		const element = document.getElementById(id) as HTMLTextAreaElement;
		adjustInputHeight(element);

		element?.addEventListener('keyup', handleKeyPress);

		return () => {
			element?.addEventListener('keyup', handleKeyPress);
		};
	}, []);

	return <textarea id={id} name={name} value={value} placeholder={placeholder} className={`${styles.button} ${className}`} />;
}
