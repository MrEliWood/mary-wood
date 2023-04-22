type page = {
	name: string;
	path: string;
	children: page[];
};

const pagelist: page[] = [
	{
		name: 'home',
		path: '/',
		children: []
	},
	{
		name: 'about',
		path: '/about',
		children: []
	},
	{
		name: 'books',
		path: '/books',
		children: [
			{
				name: 'nonfiction',
				path: '/nonfiction',
				children: []
			},
			{
				name: 'fiction',
				path: '/fiction',
				children: []
			},
			{
				name: 'memoir',
				path: '/memoir',
				children: []
			}
		]
	},
	{
		name: 'articles',
		path: '/articles',
		children: []
	},
	{
		name: 'blog',
		path: '/blog',
		children: []
	},
	{
		name: 'contact',
		path: '/contact',
		children: []
	}
];

export default pagelist;
