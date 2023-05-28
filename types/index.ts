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
	id: number;
	images: Image[];
	text: string;
	title: string;
	updatedAt: string;
}
