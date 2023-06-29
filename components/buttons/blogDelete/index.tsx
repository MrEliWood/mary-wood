// external
import { useMemo, useCallback } from 'react';

// styles
import styles from './style.module.css';

interface Props {
	onClick: React.MouseEventHandler<HTMLButtonElement>;
}

export default function BlogDelete(props: Props) {
	const { onClick } = useMemo(() => props, []);

	return (
		<button className={styles.delete_button} onClick={onClick}>
			<svg width='14.1797' height='17.6147'>
				<g>
					<rect height='17.6147' opacity='0' width='14.1797' x='0' y='0' />
					<path d='M3.87451 3.34717L5.03906 3.34717L5.03906 1.77979C5.03906 1.3623 5.33203 1.09131 5.77148 1.09131L8.39355 1.09131C8.83301 1.09131 9.12598 1.3623 9.12598 1.77979L9.12598 3.34717L10.2905 3.34717L10.2905 1.70654C10.2905 0.644531 9.60205 0 8.47412 0L5.69092 0C4.56299 0 3.87451 0.644531 3.87451 1.70654ZM0.549316 3.93311L13.6377 3.93311C13.938 3.93311 14.1797 3.67676 14.1797 3.37646C14.1797 3.07617 13.938 2.82715 13.6377 2.82715L0.549316 2.82715C0.256348 2.82715 0 3.07617 0 3.37646C0 3.68408 0.256348 3.93311 0.549316 3.93311ZM3.73535 16.311L10.4517 16.311C11.499 16.311 12.2021 15.6299 12.2534 14.5825L12.7661 3.79395L11.5869 3.79395L11.0962 14.458C11.0815 14.8975 10.7666 15.2051 10.3345 15.2051L3.83789 15.2051C3.42041 15.2051 3.10547 14.8901 3.0835 14.458L2.56348 3.79395L1.41357 3.79395L1.93359 14.5898C1.98486 15.6372 2.67334 16.311 3.73535 16.311ZM4.92188 13.9526C5.2002 13.9526 5.3833 13.7769 5.37598 13.5205L5.14893 5.68359C5.1416 5.42725 4.9585 5.25879 4.69482 5.25879C4.4165 5.25879 4.2334 5.43457 4.24072 5.69092L4.46045 13.5205C4.46777 13.7842 4.65088 13.9526 4.92188 13.9526ZM7.08984 13.9526C7.36816 13.9526 7.56592 13.7769 7.56592 13.5205L7.56592 5.69092C7.56592 5.43457 7.36816 5.25879 7.08984 5.25879C6.81152 5.25879 6.62109 5.43457 6.62109 5.69092L6.62109 13.5205C6.62109 13.7769 6.81152 13.9526 7.08984 13.9526ZM9.26514 13.9526C9.52881 13.9526 9.71191 13.7842 9.71924 13.5205L9.93896 5.69092C9.94629 5.43457 9.76318 5.25879 9.48486 5.25879C9.22119 5.25879 9.03809 5.42725 9.03076 5.69092L8.81104 13.5205C8.80371 13.7769 8.98682 13.9526 9.26514 13.9526Z' />
				</g>
			</svg>
		</button>
	);
}
