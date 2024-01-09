import { BlogData, FilteredBlogs } from '@/types';

export async function GET() {
	try {
		const res = await fetch(`${process.env.BASE_URL}/api/blog`);
		const data: BlogData[] = await res.json();

		const blogs: FilteredBlogs = {
			published: data.filter((blog) => blog.published && !blog.deleted),
			drafts: data.filter((blog) => !blog.published && !blog.deleted),
			deleted: data.filter((blog) => blog.deleted)
		};

		return Response.json({ blogs });
	} catch (error) {
		console.error(error);

		return { published: [], drafts: [], deleted: [] };
	}
}
