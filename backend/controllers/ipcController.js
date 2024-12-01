
const db = require('../database'); 


const getAllData = async (req, res) => {
    try {
        const ipcData = await db.query('SELECT * FROM ipc'); 
        res.status(200).json({
            success: true,
            data: ipcData,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error retrieving data',
            error: error.message,
        });
    }
};

const getDataById = async (req, res) => {
    const { id } = req.params;

    try {
        const ipcData = await db.query('SELECT * FROM ipc WHERE id = ?', [id]); 
        if (ipcData.length === 0) {
            return res.status(404).json({
                success: false,
                message: `No data found with ID ${id}`,
            });
        }
        res.status(200).json({
            success: true,
            data: ipcData[0],
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error retrieving data',
            error: error.message,
        });
    }
};

module.exports = {
    getAllData,
    getDataById,
};
