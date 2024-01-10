export interface ImageType {
	blog_id: number;
	createdAt: string;
	id: number;
	src: string;
	updatedAt: string;
}

export type Work = {
	id: string;
	category: string;
	sub: string;
	title: string;
	caption: string;
	description: string;
	preview: string;
	image: any;
	published: string;
	link: string;
	table: { type: string; text: string }[] | null;
	navLink: string;
};

export interface BlogData {
	author: object;
	author_id: number;
	caption: string | null;
	deleted: boolean;
	id: number | null;
	images: ImageType[];
	published: boolean;
	text: string;
	title: string;
	publishedAt: string | null;
}

export interface FilteredBlogs {
	published: BlogData[];
	drafts: BlogData[];
	deleted: BlogData[];
}
