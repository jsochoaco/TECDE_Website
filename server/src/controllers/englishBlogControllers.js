const { EnglishBlog } = require("../db");

const createEnglishBlog = async (data) => {
    try {
        const newBlog = await EnglishBlog.create(data);
        return newBlog;
    } catch (error) {
        console.error("Error creating English blog", error);
        throw error;
    }
};

const getAllEnglishBlogs = async () => {
    try {
        const blogs = await EnglishBlog.findAll();
        return blogs;
    } catch (error) {
        console.error("Error fetching all English blogs", error);
        throw error;
    }
};

const getEnglishBlogById = async (id) => {
    try {
        const blog = await EnglishBlog.findByPk(id);
        return blog;
    } catch (error) {
        console.error("Error fetching English blog by ID", error);
        throw error;
    }
};

const updateEnglishBlog = async (data, id) => {
    try {
        const element = await EnglishBlog.findByPk(id);
        if (!element) return null;
        Object.keys(data).forEach(key => {
          if (data[key] !== undefined) {
            element[key] = data[key];
          }
        });
        await element.save();
    } catch (error) {
        console.error("Error updating English blog", error);
        throw error;
    }
};

const updateState = async (id) => {
    try {
        const user = await EnglishBlog.findByPk(id);
        if (user) {
            user.enabled = !user.enabled;
            await user.save();
            return user;
        } else {
            return null;
        }
    } catch (error) {
        console.error("Error updating user state: ", error);
        throw error;
    }
};


const deleteEnglishBlog = async (id) => {
    try {
        const blog = await EnglishBlog.findByPk(id);
        if (blog) {
            await blog.destroy();
            return true;
        } else {
            return null;
        }
    } catch (error) {
        console.error("Error deleting English blog", error);
        throw error;
    }
};

module.exports = {
    createEnglishBlog,
    getAllEnglishBlogs,
    getEnglishBlogById,
    updateEnglishBlog,
    deleteEnglishBlog,
    updateState
};
