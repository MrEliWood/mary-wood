import workData from './workData';

type Category = {
	id: string;
	name: string;
	subCategories: {
		id: string;
		name: string;
	}[];
};

const workCategories: Category[] = [];

workData.forEach(({ category, sub }) => {
	const previousCategory = workCategories[workCategories.length - 1];
	const previousSub = previousCategory?.subCategories[previousCategory.subCategories.length - 1];

	if (previousCategory?.name === category && previousSub?.name === sub) {
		return;
	}

	const subObject = {
		id: sub && sub.replaceAll(' ', '-'),
		name: sub
	};

	if (previousCategory?.name === category && category !== sub) {
		previousCategory.subCategories.push(subObject);
		return;
	}

	if (previousCategory?.name === category) {
		return;
	}

	const categoryObject: Category = {
		id: category.replaceAll(' ', '-'),
		name: category,
		subCategories: sub === category ? [] : [subObject]
	};

	workCategories.push(categoryObject);
});

export default workCategories;
