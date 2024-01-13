import { activeBlog, setActiveBlog, newActiveBlog } from './activeBlog';
import { activeTab, setActiveTab } from './activeTab';
import { allBlogs, setAllBlogs } from './allBlogs';
import background from './background';
import blogData from './blogData';
import blogFilter from './blogFilter';
import blogFormVisible from './blogFormVisible';
import { editorScrolled, setEditorScrolled } from './editorScrolled';
import loginVisible from './loginVisible';
import token from './token';

export const reducer = { activeBlog, activeTab, allBlogs, background, blogData, blogFilter, blogFormVisible, editorScrolled, loginVisible, token };
export const actions = { setAllBlogs, setActiveBlog, setActiveTab, newActiveBlog, setEditorScrolled };

// export { setAllBlogs, setActiveBlog, newActiveBlog, setEditorScrolled };
