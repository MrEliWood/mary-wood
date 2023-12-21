// external

// internal

// style
import styles from './style.module.css';

type Props = {
	href?: string;
	color?: string;
	children?: React.ReactNode;
};

export default function Button({ color = 'blue', children }: Props) {
	return <button className={styles.button}>{children}</button>;
}
