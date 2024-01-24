// external
import jwt from 'jsonwebtoken';

// types
import { BlogData, FilteredBlogs } from '@/types';

const API = {
	login: async (password: string) => {
		try {
			const id = process.env.USER_ID;

			const options = {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({ id, password })
			};

			const res = await fetch(`${process.env.BASE_URL}/api/user/login`, options);
			const data = await res.json();

			localStorage.setItem('Mary Wood - Token', data.token);

			return data;
		} catch (error) {
			console.error(error);

			return { token: null, user: null };
		}
	},

	logout: () => {
		localStorage.removeItem('Mary Wood - Token');
		localStorage.removeItem('Mary Wood - Active Blog');
	},

	verifyToken: () => {
		try {
			const token = localStorage.getItem('Mary Wood - Token');

			const secret = process.env.JWT_SECRET || 'not secret';

			const { exp } = jwt.verify(token || '', secret) as { exp: number };
			const expirationDatetimeInSeconds = exp * 1000;

			return Date.now() <= expirationDatetimeInSeconds;
		} catch (error) {
			console.error(error);

			return false;
		}
	},

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

	saveBlog: async (blog: BlogData) => {
		const { id } = blog;

		try {
			const options = {
				method: id ? 'PUT' : 'POST',
				headers: {
					'Content-Type': 'application/json',
					Authorization: localStorage.getItem('Mary Wood - Token') || ''
				},
				body: JSON.stringify(blog)
			};

			const res: Response = await fetch(`${process.env.BASE_URL}/api/blog/${id ? id : ''}`, options);

			if (res.ok) {
				localStorage.removeItem('Mary Wood - Unsaved Blog');
				return res.json();
			}
		} catch (error) {
			console.error(error);
		}

		return false;
	},

	publishBlog: async (blog: BlogData) => {
		const { id } = blog;

		try {
			const published = true;
			const publishedAt = blog.publishedAt || new Date();

			const options = {
				method: id ? 'PUT' : 'POST',
				headers: {
					'Content-Type': 'application/json',
					Authorization: localStorage.getItem('Mary Wood - Token') || ''
				},
				body: JSON.stringify({ ...blog, published, publishedAt })
			};

			const res: Response = await fetch(`${process.env.BASE_URL}/api/blog/${id ? id : ''}`, options);

			if (res.ok) {
				localStorage.removeItem('Mary Wood - Unsaved Blog');
				return res.json();
			}
		} catch (error) {
			console.error(error);
		}

		return false;
	},

	deleteBlog: async (blog: BlogData) => {
		try {
			const options = {
				method: 'PUT',
				headers: {
					'Content-Type': 'application/json',
					Authorization: localStorage.getItem('Mary Wood - Token') || ''
				},
				body: JSON.stringify({ ...blog, deleted: true })
			};

			const res: Response = await fetch(`${process.env.BASE_URL}/api/blog/${blog.id}`, options);

			if (res.ok) {
				localStorage.removeItem('Mary Wood - Unsaved Blog');
				return res.json();
			}
		} catch (error) {
			console.error(error);
		}

		return false;
	},

	recoverBlog: async (blog: BlogData) => {
		try {
			const options = {
				method: 'PUT',
				headers: {
					'Content-Type': 'application/json',
					Authorization: localStorage.getItem('Mary Wood - Token') || ''
				},
				body: JSON.stringify({ ...blog, deleted: false })
			};

			const res: Response = await fetch(`${process.env.BASE_URL}/api/blog/${blog.id}`, options);

			if (res.ok) {
				return res.json();
			}
		} catch (error) {
			console.error(error);
		}

		return false;
	},

	changePW: async ({ currentPW, newPW }: { currentPW: string; newPW: string }) => {
		try {
			const options = {
				method: 'PUT',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({ password: currentPW, newPassword: newPW })
			};

			const res: Response = await fetch(`${process.env.BASE_URL}/api/user/cpw/1`, options);
			console.log(res.json());

			if (res.ok) {
				return true;
			}
		} catch (error) {
			console.error(error);
		}

		return false;
	}
};

export default API;
