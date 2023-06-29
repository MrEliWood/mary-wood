import { setBlogs } from '@/redux/features/blogData';

import { Blog, Blogs } from '@/types';

const API = {
	getBlogs: async () => {
		try {
			const res: Response = await fetch(`${process.env.BASE_URL}/api/blog`);
			const data: Blog[] = await res.json();

			const blogs: Blogs = {
				published: data.filter((blog) => blog.published && !blog.deleted),
				drafts: data.filter((blog) => !blog.published && !blog.deleted),
				deleted: data.filter((blog) => blog.deleted)
			};

			return blogs;
		} catch (error) {
			console.error(error);

			return { published: [], drafts: [], deleted: [] };
		}
	},

	deleteBlog: async (blog: Blog, token: string) => {
		try {
			const options = {
				method: 'PUT',
				headers: {
					'Content-Type': 'application/json',
					Authorization: token
				},
				body: JSON.stringify({ ...blog, deleted: true })
			};

			const res: Response = await fetch(`${process.env.BASE_URL}/api/blog/${blog.id}`, options);

			if (res.ok) return true;
		} catch (error) {
			console.error(error);
		}

		return false;
	}
};

export default API;
