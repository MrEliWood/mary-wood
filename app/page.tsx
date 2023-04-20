import Nav from '../components/nav';

import styles from './page.module.css';

export default function Home() {
	return (
		<>
			<Nav />
			<main className={styles.main}></main>
		</>
	);
}
