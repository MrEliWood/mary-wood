import { BlogData, FilteredBlogs } from '@/types';

const API = {
	getAllBlogs: async () => {
		try {
			const res: Response = await fetch(`${process.env.BASE_URL}/api/blog`);
			const data: BlogData[] = await res.json();

			const blogs: FilteredBlogs = {
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

	getOneBlog: async (id: number) => {
		try {
			const res: Response = await fetch(`${process.env.BASE_URL}/api/blog/${id}`);

			return res.json();
		} catch (error) {
			console.error(error);

			throw new Error('Failed to fetch data');
		}
	},

	createBlog: async (blog: BlogData) => {
		try {
			const options = {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					Authorization: localStorage.getItem('Mary_Wood_JWT') || ''
				},
				body: JSON.stringify(blog)
			};

			const res: Response = await fetch(`${process.env.BASE_URL}/api/blog`, options);

			if (res.ok) return true;
		} catch (error) {
			console.error(error);
		}

		return false;
	},

	updateBlog: async (blog: BlogData) => {
		try {
			const options = {
				method: 'PUT',
				headers: {
					'Content-Type': 'application/json',
					Authorization: localStorage.getItem('Mary_Wood_JWT') || ''
				},
				body: JSON.stringify(blog)
			};

			const res: Response = await fetch(`${process.env.BASE_URL}/api/blog/${blog.id}`, options);

			if (res.ok) return true;
		} catch (error) {
			console.error(error);
		}

		return false;
	}

	// deleteBlog: async (blog: BlogData, token: string | null) => {
	// 	try {
	// 		const options = {
	// 			method: 'PUT',
	// 			headers: {
	// 				'Content-Type': 'application/json',
	// 				Authorization: token
	// 			},
	// 			body: JSON.stringify({ ...blog, deleted: true })
	// 		};

	// 		const res: Response = await fetch(`${process.env.BASE_URL}/api/blog/${blog.id}`, options);

	// 		if (res.ok) return true;
	// 	} catch (error) {
	// 		console.error(error);
	// 	}

	// 	return false;
	// }
};

export default API;
