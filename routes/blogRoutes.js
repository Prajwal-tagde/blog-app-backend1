const express = require('express');
const { createBlog, getBlogs, deleteBlog, updateBlog } = require('../controllers/blogController');


const route = express.Router();


route.post('/blog-post', createBlog);
route.get('/get-blogs', getBlogs);
route.delete('/delete-blog/:id', deleteBlog);
route.put('/update-blog/:id', updateBlog);


module.exports = route;