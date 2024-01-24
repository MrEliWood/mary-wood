import { API } from '@/utils';

const saveDraft = async (localBlogString: string) => {
	const unsavedDraft = JSON.parse(localBlogString || '');
	const savedDraft = await API.saveBlog(unsavedDraft);

	return savedDraft;
};

const autosave = async () => {
	const localBlogString = localStorage.getItem('Mary Wood - Unsaved Blog');
	if (!localBlogString) return true;

	const savedDraft = await saveDraft(localBlogString);
	if (savedDraft) return true;

	return false;
};

export default autosave;
