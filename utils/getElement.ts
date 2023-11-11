const getElement = (id: string) => {
	const htmlElement = document.getElementById(id) || undefined;
	const position = htmlElement?.getBoundingClientRect();

	const elementObject = {
		html: htmlElement,
		top: position?.top,
		right: position?.right,
		bottom: position?.bottom,
		left: position?.left,
		width: position?.width,
		height: position?.height
	};

	return elementObject;
};

export default getElement;
