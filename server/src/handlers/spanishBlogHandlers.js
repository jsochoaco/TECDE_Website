const {
    createSpanishBlog,
    getAllSpanishBlogs,
    getSpanishBlogById,
    updateSpanishBlog,
    updateState,
    deleteSpanishBlog
  } = require("../controllers/spanishBlogControllers"); // Asumiendo que tus controladores están en un archivo llamado spanishBlogController.js
  
  // Crear un nuevo blog en español
  const createSpanishBlogHandler = async (req, res) => {
    try {
      const data = req.body;
      const newSpanishBlog = await createSpanishBlog(data);
      res.status(201).json({ success: true, message: "Spanish blog created", blog: newSpanishBlog });
    } catch (error) {
      res.status(500).json({ success: false, message: "Error creating spanish blog", error: error.message });
    }
  };
  
  // Obtener todos los blogs en español
  const getAllSpanishBlogsHandler = async (req, res) => {
    try {
      const blogs = await getAllSpanishBlogs();
      res.status(201).json({ success: true, blogs: blogs });
    } catch (error) {
      res.status(500).json({ success: false, message: "Error fetching all spanish blogs", error: error.message });
    }
  };
  
  // Obtener un blog en español por ID
  const getSpanishBlogByIdHandler = async (req, res) => {
    try {
      const blog = await getSpanishBlogById(req.params.id);
      if (blog) {
        res.status(201).json({ success: true, blog: blog });
      } else {
        res.status(404).json({ success: false, message: "Spanish blog not found" });
      }
    } catch (error) {
      res.status(500).json({ success: false, message: "Error fetching spanish blog by ID", error: error.message });
    }
  };
  
  // Actualizar un blog en español
  const updateSpanishBlogHandler = async (req, res) => {
    try {
      const blog = await updateSpanishBlog(req.body, req.params.id);
      if (blog) {
        res.status(201).json({ success: true, message: "Spanish blog updated", blog: blog});
      } else {
        res.status(404).json({ success: false, message: "Spanish blog not found" });
      }
    } catch (error) {
      res.status(500).json({ success: false, message: "Error updating spanish blog", error: error.message });
    }
  };
  
  // Actualizar el estado de un blog en español
  const updateStateHandler = async (req, res) => {
    try {
      const blog = await updateState(req.params.id);
      if (blog) {
        res.status(201).json({ success: true, message: "Spanish blog state updated", blog: blog });
      } else {
        res.status(404).json({ success: false, message: "Spanish blog not found" });
      }
    } catch (error) {
      res.status(500).json({ success: false, message: "Error updating spanish blog state", error: error.message });
    }
  };
  
  // Eliminar un blog en español
  const deleteSpanishBlogHandler = async (req, res) => {
    try {
      const success = await deleteSpanishBlog(req.params.id);
      if (success) {
        res.status(201).json({ success: true, message: "Spanish blog deleted" });
      } else {
        res.status(404).json({ success: false, message: "Spanish blog not found" });
      }
    } catch (error) {
      res.status(500).json({ success: false, message: "Error deleting spanish blog", error: error.message });
    }
  };
  
  module.exports = {
    createSpanishBlogHandler,
    getAllSpanishBlogsHandler,
    getSpanishBlogByIdHandler,
    updateSpanishBlogHandler,
    updateStateHandler,
    deleteSpanishBlogHandler
  };
  