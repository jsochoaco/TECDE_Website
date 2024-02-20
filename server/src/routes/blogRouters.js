const { Router } = require("express");
const {
    createUserHandler,
    loginUserHandler,
    confirmUserPasswordHandler,
    getAllUsersHandler,
    getUserByIdHandler,
    updateUserHandler,
    updateAuthorizationHandler,
    updateProfileHandler,
    deleteUserHandler,
    changePasswordHandler,
    getUserByEmailHandler,
    getEmailExiste
} = require("../handlers/userHandlers");

const blogsRouter = Router();

blogsRouter.post("/create", createUserHandler);
blogsRouter.post("/login", loginUserHandler);
blogsRouter.post("/confirm-password/:id", confirmUserPasswordHandler);
blogsRouter.get("/", getAllUsersHandler);
blogsRouter.get("/:id", getUserByIdHandler);
blogsRouter.get("/email/:email", getUserByEmailHandler);
blogsRouter.get("/email/exist/:email", getEmailExiste);
blogsRouter.patch("/update/:id", updateUserHandler);
blogsRouter.patch("/update-authorization/:id", updateAuthorizationHandler);
blogsRouter.patch("/update-profile/:id", updateProfileHandler);
blogsRouter.patch("/change-password/:id", changePasswordHandler);
blogsRouter.delete("/delete/:id", deleteUserHandler);

module.exports = blogsRouter
