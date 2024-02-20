const { SpanishBlog } = require("../db");

const createSpanishBlog = async (data) => {
    try {
        const newSpanishBlog = await SpanishBlog.create(data);
        return newSpanishBlog;
    } catch (error) {
        console.error("Error creating blog", error);
        throw error;
    }
};

const getAllSpanishBlogs = async () => {
    try {
        const blogs = await SpanishBlog.findAll();
        return blogs;
    } catch (error) {
        console.error("Error fetching all spanish blogs", error);
        throw error;
    }
};

const getSpanishBlogById = async (id) => {
    try {
        const user = await SpanishBlog.findByPk(id);
        return user;
    } catch (error) {
        console.error("Error fetching blog by ID", error);
        throw error;
    }
};


const updateSpanishBlog = async (data, id) => {
    try {
        const elementId = id;
        const element = await SpanishBlog.findByPk(elementId);

        if (element) {
            element = data
            await element.save();
            return element;
        } else {
            return null;
        }
    } catch (error) {
        console.error("Error updating element: ", error);
        throw error;
    }
};

const updateState = async (idSpanishBlog) => {
    try {
        const user = await SpanishBlog.findByPk(idSpanishBlog);
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


const deleteSpanishBlog = async (id) => {
    try {
        const user = await SpanishBlog.findByPk(id);
        if (user) {
            await user.destroy();
            return true;
        } else {
            return null;
        }
    } catch (error) {
        console.error("Error deleting user", error);
        throw error;
    }
};

module.exports = {
    createSpanishBlog,
    getAllSpanishBlogs,
    getSpanishBlogById,
    updateSpanishBlog,
    updateAuthorization,
    deleteSpanishBlog,
    updateState
};
