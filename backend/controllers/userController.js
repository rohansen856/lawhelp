const db = require('../database');


const createUser = async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({
            success: false,
            message: 'Email and password are required',
        });
    }

    try {

        const result = await db.query(
            'INSERT INTO users (email, password) VALUES (?, ?)',
            [email, password] 
        );

        res.status(201).json({
            success: true,
            message: 'User created successfully',
            userId: result.insertId, 
        });
    } catch (error) {
        if (error.code === 'ER_DUP_ENTRY') {
            return res.status(409).json({
                success: false,
                message: 'Email already exists',
            });
        }

        res.status(500).json({
            success: false,
            message: 'An error occurred while creating the user',
            error: error.message,
        });
    }
};


const getAllUsers = async (req, res) => {
    try {
        const users = await db.query('SELECT id, email, created_at FROM users'); 

        res.status(200).json({
            success: true,
            data: users,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'An error occurred while retrieving users',
            error: error.message,
        });
    }
};


const getUserById = async (req, res) => {
    const { id } = req.params;

    try {
        const user = await db.query('SELECT id, email, created_at FROM users WHERE id = ?', [id]);

        if (user.length === 0) {
            return res.status(404).json({
                success: false,
                message: `User with ID ${id} not found`,
            });
        }

        res.status(200).json({
            success: true,
            data: user[0],
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'An error occurred while retrieving the user',
            error: error.message,
        });
    }
};

module.exports = {
    createUser,
    getAllUsers,
    getUserById,
};
