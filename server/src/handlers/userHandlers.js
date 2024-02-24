const {
    createUser,
    getAllUsers,
    getUserById,
    updateUser,
    updateAuthorization,
    deleteUser,
    getUserByEmail,
    updateNews
} = require("../controllers/usersControllers"); // Asumiendo que tus controladores están en un archivo llamado userController.js

// Crear un nuevo usuario
const createUserHandler = async (req, res) => {
    try {
        const data = req.body;
        const newUser = await createUser(data);
        res.status(201).json({ success: true, message: "User created", user: newUser });
    } catch (error) {
        res.status(500).json({ success: false, message: "Error creating user", error: error.message });
    }
};

// Obtener todos los usuarios
const getAllUsersHandler = async (req, res) => {
    try {
        const users = await getAllUsers();
        res.json({ success: true, users: users});
    } catch (error) {
        res.status(500).json({ success: false, message: "Error fetching all users", error: error.message });
    }
};

// Obtener un usuario por ID
const getUserByIdHandler = async (req, res) => {
    try {
        const user = await getUserById(req.params.id);
        if (user) {
            res.json({ success: true, user: user });
        } else {
            res.status(404).json({ success: false, message: "User not found" });
        }
    } catch (error) {
        res.status(500).json({ success: false, message: "Error fetching user by ID", error: error.message });
    }
};

// Obtener un usuario por email
const getUserByEmailHandler = async (req, res) => {
    try {
        const user = await getUserByEmail(req.params.email);
        if (user) {
            res.json({ success: true, user: user });
        } else {
            res.status(404).json({ success: false, message: "User not found" });
        }
    } catch (error) {
        res.status(500).json({ success: false, message: "Error fetching user by email", error: error.message });
    }
};

// Actualizar un usuario
const updateUserHandler = async (req, res) => {
    try {
        const user = await updateUser(req.body, req.params.id);
        if (user) {
            res.json({ success: true, message: "User updated", user: user });
        } else {
            res.status(404).json({ success: false, message: "User not found" });
        }
    } catch (error) {
        res.status(500).json({ success: false, message: "Error updating user", error: error.message });
    }
};

// Actualizar la autorización de un usuario
const updateAuthorizationHandler = async (req, res) => {
    try {
        const user = await updateAuthorization(req.params.id);
        if (user) {
            res.json({ success: true, message: "User authorization updated", user: user });
        } else {
            res.status(404).json({ success: false, message: "User not found" });
        }
    } catch (error) {
        res.status(500).json({ success: false, message: "Error updating user authorization", error: error.message });
    }
};

// Actualizar la autorización de un usuario
const updateNewsHandler = async (req, res) => {
    try {
        const user = await updateNews(req.params.id);
        if (user) {
            res.json({ success: true, message: "User authorization updated", user: user });
        } else {
            res.status(404).json({ success: false, message: "User not found" });
        }
    } catch (error) {
        res.status(500).json({ success: false, message: "Error updating user authorization", error: error.message });
    }
};
// Eliminar un usuario
const deleteUserHandler = async (req, res) => {
    try {
        const success = await deleteUser(req.params.id);
        if (success) {
            res.json({ success: true, message: "User deleted" });
        } else {
            res.status(404).json({ success: false, message: "User not found" });
        }
    } catch (error) {
        res.status(500).json({ success: false, message: "Error deleting user", error: error.message });
    }
};

module.exports = {
    createUserHandler,
    getAllUsersHandler,
    getUserByIdHandler,
    getUserByEmailHandler,
    updateUserHandler,
    updateAuthorizationHandler,
    deleteUserHandler,
    updateNewsHandler
};
