import { Work } from '@/components';

export default function Scholarship() {
	return (
		<section>
			<article>
				<h3>Books</h3>
				<hr />
				<Work category='books' />
			</article>

			<article>
				<h3>Essays & Articles</h3>
				<hr />
				<Work category='essays & articles' />
			</article>
		</section>
	);
}
