import { activeBlog, setActiveBlog, newActiveBlog } from './activeBlog';
import { allBlogs, setAllBlogs } from './allBlogs';
import background from './background';
import blogData from './blogData';
import blogFilter from './blogFilter';
import blogFormVisible from './blogFormVisible';
import loginVisible from './loginVisible';
import token from './token';

export const reducer = { activeBlog, allBlogs, background, blogData, blogFilter, blogFormVisible, loginVisible, token };
export { setAllBlogs, setActiveBlog, newActiveBlog };
