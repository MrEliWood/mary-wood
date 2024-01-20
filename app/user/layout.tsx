// external
import { Crimson_Text } from 'next/font/google';

// styles
import '@radix-ui/themes/styles.css';
import './_styles/global.css';

const crimson = Crimson_Text({
	weight: ['400', '600', '700'],
	subsets: ['latin'],
	variable: '--font-crimson'
});

type Props = {
	children: React.ReactNode;
};

export default function Admin({ children }: Props) {
	return <div className='user_layout'>{children}</div>;
}
