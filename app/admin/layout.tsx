import { Theme, ThemePanel } from '@radix-ui/themes';

import '@radix-ui/themes/styles.css';
import styles from './layout.module.css';

type Props = {
	children: React.ReactNode;
};

export default function Admin({ children }: Props) {
	return (
		<Theme>
			{children}
			<ThemePanel />
		</Theme>
	);
}
