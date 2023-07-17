import Image from 'next/image';

import styles from './page.module.css';
import { worklist } from '@/utils';

interface Props {
	params: { index: number };
}

export default function DynamicWriting(props: Props) {
	const { index } = props.params;

	return <div>My Work: {index}</div>;
}
