// Importamos los controladores de blogs en inglés
const {
    createEnglishBlog,
    getAllEnglishBlogs,
    getEnglishBlogById,
    updateEnglishBlog,
    deleteEnglishBlog,
    updateState
} = require("../controllers/englishBlogControllers"); // Asegúrate de que el nombre del archivo sea correcto

// Crear un nuevo blog en inglés
const createEnglishBlogHandler = async (req, res) => {
    try {
        const data = req.body;
        const newBlog = await createEnglishBlog(data);
        res.status(201).json({ success: true, message: "English blog created", blog: newBlog });
    } catch (error) {
        res.status(500).json({ success: false, message: "Error creating English blog", error: error.message });
    }
};

// Obtener todos los blogs en inglés
const getAllEnglishBlogsHandler = async (req, res) => {
    try {
        const blogs = await getAllEnglishBlogs();
        res.status(201).json({ success: true, blogs: blogs });
    } catch (error) {
        res.status(500).json({ success: false, message: "Error fetching all English blogs", error: error.message });
    }
};

// Obtener un blog en inglés por ID
const getEnglishBlogByIdHandler = async (req, res) => {
    try {
        const { id } = req.params
        const blog = await getEnglishBlogById(id);
        if (blog) {
            res.status(201).json({ success: true, blog: blog });
        } else {
            res.status(404).json({ success: false, message: "English blog not found" });
        }
    } catch (error) {
        res.status(500).json({ success: false, message: "Error fetching English blog by ID", error: error.message });
    }
};

// Actualizar un blog en inglés
const updateEnglishBlogHandler = async (req, res) => {
    try {
        const blog = await updateEnglishBlog(req.body, req.params.id);
        if (blog) {
            res.status(201).json({ success: true, message: "English blog updated", blog: blog });
        } else {
            res.status(404).json({ success: false, message: "English blog not found" });
        }
    } catch (error) {
        res.status(500).json({ success: false, message: "Error updating English blog", error: error.message });
    }
};

// Actualizar el estado de un blog en español
const updateStateHandlerEN = async (req, res) => {
    try {
        const blog = await updateState(req.params.id);
        if (blog) {
            res.status(201).json({ success: true, message: "English blog state updated", blog: blog });
        } else {
            res.status(404).json({ success: false, message: "English blog not found" });
        }
    } catch (error) {
        res.status(500).json({ success: false, message: "Error updating english blog state", error: error.message });
    }
};

// Eliminar un blog en inglés
const deleteEnglishBlogHandler = async (req, res) => {
    try {
        const success = await deleteEnglishBlog(req.params.id);
        if (success) {
            res.status(201).json({ success: true, message: "English blog deleted" });
        } else {
            res.status(404).json({ success: false, message: "Englishb blog not found" });
        }
    } catch (error) {
        res.status(500).json({ success: false, message: "Error deleting English blog", error: error.message });
    }
};

module.exports = {
    createEnglishBlogHandler,
    getAllEnglishBlogsHandler,
    getEnglishBlogByIdHandler,
    updateEnglishBlogHandler,
    deleteEnglishBlogHandler,
    updateStateHandlerEN
};