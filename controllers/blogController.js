const BlogPost = require('../models/blogModel');


const createBlog = async (req, res) => {
    try {
        const { title, description } = req.body;

        let blog = new BlogPost({title, description});

        await blog.save();

        res.status(200).json({message: "Blog Post saved Successfully!", blog});

    } catch (error) {
        res.status(500).json({msg: error});
    }
}

const getBlogs = async (req, res) => {
    try {
        let blogs = await BlogPost.find();

        if(!blogs){
            res.status(404).json({ message: 'No Blogs Found' });
        }

        res.status(200).json({ blogs });
        
    } catch (error) {
        res.status(500).json({msg: error});
    }
}

const deleteBlog = async (req, res) => {
    try {
        let { id } = req.params;

        let blog = await BlogPost.findByIdAndDelete(id);

        if(!blog){
            res.status(404).json({ message: 'No Blogs Found' });
        }

        res.status(200).json({ message: 'Blog Deleted Successfully'});
        
    } catch (error) {
        res.status(500).json({msg: error});
    }
}

const updateBlog = async (req, res) => {
    try {
        const blog = await BlogPost.findById(req.params.id);

        if(!blog){
            res.status(404).json({ message: 'No Blogs Found' });
        }

        const updated = await BlogPost.findByIdAndUpdate(req.params.id, req.body);

        await updated.save();

        res.status(200).json({ message: "Blog Updated Successfully", blog });

    } catch (error) {
        res.status(500).json({msg: error});
    }
}


module.exports = { createBlog, getBlogs, deleteBlog, updateBlog };