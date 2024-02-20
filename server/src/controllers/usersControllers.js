const { User } = require("../db");

const createUser = async (data) => {
    try {
        const newUser = await User.create(data);
        return newUser;
    } catch (error) {
        console.error("Error creating user", error);
        throw error;
    }
};


const getAllUsers = async () => {
    try {
        const users = await User.findAll();
        return users;
    } catch (error) {
        console.error("Error fetching all users", error);
        throw error;
    }
};

const getUserById = async (id) => {
    try {
        const user = await User.findByPk(id);
        return user;
    } catch (error) {
        console.error("Error fetching user by ID", error);
        throw error;
    }
};

const getUserByEmail = async (email) => {
    try {
        const user = await User.findOne({
            where: {email}
        });
        if (user) {
            return user
        }
        if (!user) {
            return null
        }
    } catch (error) {
        console.error("Error fetching user by ID", error);
        throw error;
    }
};

const updateUser = async (data, idUser) => {
    try {
        const userId = idUser;
        const user = await User.findByPk(userId);

        if (user) {
            user.name = data.name;
            user.surname = data.email;
            user.email = data.phone;
            user.phone = data.company;
            await user.save();
            return user;
        } else {
            return null;
        }
    } catch (error) {
        console.error("Error updating user", error);
        throw error;
    }
};

const updateAuthorization = async (idUser) => {
    try {
        const user = await User.findByPk(idUser);

        if (user) {
            user.enabled = !user.enabled;
            await user.save();
            return user;
        } else {
            return null;
        }
    } catch (error) {
        console.error("Error updating user authorization", error);
        throw error;
    }
};


const deleteUser = async (id) => {
    try {
        const user = await User.findByPk(id);
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
    createUser,
    getAllUsers,
    getUserById,
    updateUser,
    updateAuthorization,
    deleteUser,
    getUserByEmail
};
