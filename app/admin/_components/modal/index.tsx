// external
import { Dispatch, ReactNode, SetStateAction, SyntheticEvent } from 'react';

// internal

// style
import styles from './style.module.css';

type Props = {
	isVisible: boolean;
	setIsVisible: Dispatch<SetStateAction<boolean>>;
	className?: string;
	children?: ReactNode;
};

export default function Modal({ isVisible, setIsVisible, className = '', children }: Props) {
	const handleModalClick = (event: SyntheticEvent) => {
		event.stopPropagation();
	};

	return (
		<div className={`${styles.background} ${!isVisible ? styles.hidden : ''}`} onClick={() => setIsVisible(false)}>
			<div className={`${styles.modal} ${className}`} onClick={handleModalClick}>
				{children}
			</div>
		</div>
	);
}
