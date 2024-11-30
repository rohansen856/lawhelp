const pool = require("../database")

const getAllItems = async (req, res) => {
    try {
        const [rows] = await pool.query("SELECT * FROM Articles")
        res.json(rows)
    } catch (error) {
        res.status(500).json({
            error: "Database query failed",
            details: error.message,
        })
    }
}

const getItemById = async (req, res) => {
    const { id } = req.params
    try {
        const [rows] = await pool.query("SELECT * FROM Articles WHERE id = ?", [
            id,
        ])
        if (rows.length > 0) {
            res.json(rows[0])
        } else {
            res.status(404).json({ message: "Item not found" })
        }
    } catch (error) {
        res.status(500).json({
            error: "Database query failed",
            details: error.message,
        })
    }
}

const createItem = async (req, res) => {
    const { id, title, description, category, badges, icon } = req.body
    console.log(req.body)
    try {
        const result = await pool.query(
            "INSERT INTO Articles (id, title, description, category, badges, icon) VALUES (?, ?, ?, ?, ?, ?)",
            [id, title, description, category, JSON.stringify(badges), icon]
        )
        res.status(201).json({
            id: result[0].insertId,
            title,
            description,
            category,
            badges,
            icon,
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            error: "Database insert failed",
            details: error.message,
        })
    }
}

const updateItem = async (req, res) => {
    const { id } = req.params
    const { title, description, category, badges, icon } = req.body
    try {
        const result = await pool.query(
            "UPDATE Articles SET title = ?, description = ?, category = ?, badges = ?, icon = ? WHERE id = ?",
            [title, description, category, JSON.stringify(badges), icon, id]
        )
        if (result[0].affectedRows > 0) {
            res.json({ id, title, description, category, badges, icon })
        } else {
            res.status(404).json({ message: "Item not found" })
        }
    } catch (error) {
        res.status(500).json({
            error: "Database update failed",
            details: error.message,
        })
    }
}

const deleteItem = async (req, res) => {
    const { id } = req.params
    try {
        const result = await pool.query("DELETE FROM Articles WHERE id = ?", [
            id,
        ])
        if (result[0].affectedRows > 0) {
            res.json({ message: "Item deleted successfully" })
        } else {
            res.status(404).json({ message: "Item not found" })
        }
    } catch (error) {
        res.status(500).json({
            error: "Database delete failed",
            details: error.message,
        })
    }
}

module.exports = {
    getAllItems,
    getItemById,
    createItem,
    updateItem,
    deleteItem,
}
