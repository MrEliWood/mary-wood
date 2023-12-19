import styles from './page.module.css';

type Props = {
	children: React.ReactNode;
};

export default function Admin({ children }: Props) {
	return (
		<div className={styles.layout}>
			<nav className={styles.tabs}></nav>

			{children}
		</div>
	);
}
