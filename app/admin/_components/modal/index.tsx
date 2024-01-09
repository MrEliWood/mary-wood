// external

// internal

// style
import styles from './style.module.css';

type Props = {
	backgroundClassName?: string;
	modalClassName?: string;
	backgroundClick?: () => void;
	modalClick?: () => void;
	children?: React.ReactNode;
};

export default function Modal({ backgroundClassName = '', modalClassName = '', modalClick, backgroundClick, children }: Props) {
	const handleModalClick = (e: React.SyntheticEvent<HTMLElement>) => {
		e.stopPropagation();

		return () => modalClick;
	};

	return (
		<div className={`${styles.background} ${backgroundClassName}`} onClick={backgroundClick}>
			<div className={`${styles.modal} ${modalClassName}`} onClick={handleModalClick}>
				{children}
			</div>
		</div>
	);
}
