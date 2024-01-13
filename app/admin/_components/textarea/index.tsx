// external
import { useState, useEffect, SyntheticEvent } from 'react';

// internal
import { getKey, setTextAreaHeight } from '@/utils';

// style
import styles from './style.module.css';

// types
type Props = {
	id?: string;
	name: string;
	value: string;
	placeholder?: string;
	onChange: (event: SyntheticEvent) => void;
	allowLineBreaks?: boolean;
	className?: string;
};

export default function TextArea({ id = 'input__' + getKey(), name, value, placeholder = '', onChange, allowLineBreaks, className = '' }: Props) {
	const [invalidKey, setInvalidKey] = useState(false);

	const setInputHeight = () => {
		const element = document.getElementById(id) as HTMLTextAreaElement;
		setTextAreaHeight(element);
	};

	const handleInputChange = (event: SyntheticEvent) => {
		if (invalidKey) return;

		onChange(event);
	};

	const handleKeyDown = (event: KeyboardEvent) => {
		const { code, key } = event;

		switch (code || key) {
			case 'Enter':
				setInvalidKey(true);
				break;

			default:
				setInvalidKey(false);
		}
	};

	const addKeydownListener = () => {
		if (allowLineBreaks) return;

		const element = document.getElementById(id) as HTMLTextAreaElement;

		element?.addEventListener('keydown', handleKeyDown);
		return () => {
			element?.removeEventListener('keydown', handleKeyDown);
		};
	};

	useEffect(addKeydownListener, []);
	useEffect(setInputHeight, [value]);

	return <textarea id={id} name={name} value={value} placeholder={placeholder} onChange={handleInputChange} className={`${styles.textarea} ${className}`} />;
}
