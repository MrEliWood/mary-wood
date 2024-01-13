const setTextAreaHeight = (element: HTMLTextAreaElement) => {
	element.style.height = '1px';
	element.style.height = element.scrollHeight + 'px';
};

export default setTextAreaHeight;
