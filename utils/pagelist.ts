type page = {
	name: string;
	children: page[];
};

const pagelist: page[] = [
	{
		name: 'home',
		children: []
	},
	{
		name: 'about',
		children: []
	},
	{
		name: 'writing',
		children: [
			{
				name: 'scholarship',
				children: [
					{
						name: 'books',
						children: []
					},
					{
						name: 'essays & articles',
						children: []
					}
				]
			},
			{
				name: 'creative work',
				children: []
			}
		]
	},
	{
		name: 'teaching',
		children: []
	},
	{
		name: 'bibliography',
		children: []
	},
	{
		name: 'blog',
		children: []
	},
	{
		name: 'contact',
		children: []
	}
];

export default pagelist;
