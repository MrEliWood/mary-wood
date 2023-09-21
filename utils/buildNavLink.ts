const formatString = (string: string) => string.toLowerCase().replaceAll(' ', '-');

const formatPath = (string: string) => {
	const formattedString = formatString(string);

	const lastCharacter = formattedString[formattedString.length - 1];
	const trailingSlash = lastCharacter === '/';
	if (!trailingSlash) return formattedString;

	return formattedString.slice(0, -1);
};

const buildNavLink = (path: string, slug: string) => {
	const formattedSlug = formatString(slug);
	const formattedPath = formatPath(path);

	return `${formattedPath}/${formattedSlug}`;
};

export default buildNavLink;
