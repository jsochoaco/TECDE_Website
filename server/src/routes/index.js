const { Router } = require("express");
const router = Router();
const usersRouter = require("./userRouters");
const blogsRouter = require("./blogRouters")

router.use("/users", usersRouter)
router.use("/blogs", blogsRouter)

module.exports = router