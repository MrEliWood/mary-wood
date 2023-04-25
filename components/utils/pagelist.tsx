type page = {
	name: string;
	path: string;
	children: page[];
};

const pagelist: page[] = [
	{
		name: 'Home',
		path: '/',
		children: []
	},
	{
		name: 'About',
		path: '/about',
		children: []
	},
	{
		name: 'Books',
		path: '/books',
		children: [
			{
				name: 'Nonfiction',
				path: '/nonfiction',
				children: []
			},
			{
				name: 'Fiction',
				path: '/fiction',
				children: []
			},
			{
				name: 'Memoir',
				path: '/memoir',
				children: []
			}
		]
	},
	{
		name: 'Articles',
		path: '/articles',
		children: []
	},
	{
		name: 'Blog',
		path: '/blog',
		children: []
	},
	{
		name: 'Contact',
		path: '/contact',
		children: []
	}
];

export default pagelist;
