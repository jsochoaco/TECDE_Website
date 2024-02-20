const { Router } = require("express");
const {
    createUserHandler,
    getAllUsersHandler,
    getUserByIdHandler,
    getUserByEmailHandler,
    updateUserHandler,
    updateAuthorizationHandler,
    deleteUserHandler
} = require("../handlers/userHandlers");

const usersRouter = Router();

usersRouter.post("/create", createUserHandler);
usersRouter.get("/", getAllUsersHandler);
usersRouter.get("/:id", getUserByIdHandler);
usersRouter.get("/email/:email", getUserByEmailHandler);
usersRouter.patch("/update/:id", updateUserHandler);
usersRouter.patch("/update-authorization/:id", updateAuthorizationHandler);
usersRouter.delete("/delete/:id", deleteUserHandler);

module.exports = usersRouter;
