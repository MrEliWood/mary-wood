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
		name: 'Writing',
		path: '/writing',
		children: [
			{
				name: 'Scholarship',
				path: '/scholarship',
				children: []
			},
			{
				name: 'Fiction',
				path: '/fiction',
				children: []
			},
			{
				name: 'Essay',
				path: '/essay',
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
		name: 'Bibliography',
		path: '/bibliography',
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
