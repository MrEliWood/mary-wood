import { BookDetails } from '@/components';

export default function Scholarship() {
	return (
		<section>
			<article>
				<h3>Books</h3>
				<hr />
				<BookDetails category='books' />
			</article>

			<article>
				<h3>Essays & Articles</h3>
				<hr />
				<BookDetails category='essays & articles' />
			</article>
		</section>
	);
}
