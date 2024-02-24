const { Router } = require("express");
const {
    createEnglishBlogHandler,
    getAllEnglishBlogsHandler,
    getEnglishBlogByIdHandler,
    updateEnglishBlogHandler,
    deleteEnglishBlogHandler,
    updateStateHandlerEN
} = require("../handlers/englishBlogHandlers");
const {
    createSpanishBlogHandler,
    getAllSpanishBlogsHandler,
    getSpanishBlogByIdHandler,
    updateSpanishBlogHandler,
    updateStateHandler,
    deleteSpanishBlogHandler
} = require("../handlers/spanishBlogHandlers");


const blogsRouter = Router();

blogsRouter.post("/en/create", createEnglishBlogHandler);
blogsRouter.get("/en", getAllEnglishBlogsHandler);
blogsRouter.get("/en/:id", getEnglishBlogByIdHandler);
blogsRouter.patch("/en/update/:id", updateEnglishBlogHandler)
blogsRouter.patch("/en/state/:id", updateStateHandlerEN)
blogsRouter.delete("/en/delete/:id", deleteEnglishBlogHandler)

blogsRouter.post("/es/create", createSpanishBlogHandler);
blogsRouter.get("/es", getAllSpanishBlogsHandler);
blogsRouter.get("/es/:id", getSpanishBlogByIdHandler);
blogsRouter.patch("/es/update/:id", updateSpanishBlogHandler)
blogsRouter.patch("/es/state/:id", updateStateHandler)
blogsRouter.delete("/es/delete/:id", deleteSpanishBlogHandler)

module.exports = blogsRouter
