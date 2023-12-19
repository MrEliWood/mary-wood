export interface Image {
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

export interface BlogType {
	author: object;
	author_id: number;
	caption: string;
	createdAt: string;
	deleted: boolean;
	id: number;
	images: Image[];
	published: boolean;
	text: string;
	title: string;
	updatedAt: string;
	publishedAt: string;
}

export interface Blogs {
	published: BlogType[];
	drafts: BlogType[];
	deleted: BlogType[];
}
