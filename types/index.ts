export interface Image {
	blog_id: number;
	createdAt: string;
	id: number;
	src: string;
	updatedAt: string;
}

export interface Blog {
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
