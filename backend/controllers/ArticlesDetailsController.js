const pool = require('../database'); 


const getAllArticles = async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM article_details');
        res.status(200).json({ success: true, data: rows });
    } catch (error) {
        console.error("Error fetching articles:", error);
        res.status(500).json({ success: false, message: "Failed to fetch articles" });
    }
};


const getArticleById = async (req, res) => {
    const { id } = req.params;
    try {
        const [rows] = await pool.query('SELECT * FROM article_details WHERE id = ?', [id]);
        if (rows.length > 0) {
            res.status(200).json({ success: true, data: rows[0] });
        } else {
            res.status(404).json({ success: false, message: "Article not found" });
        }
    } catch (error) {
        console.error("Error fetching article by ID:", error);
        res.status(500).json({ success: false, message: "Failed to fetch article" });
    }
};

module.exports = {
    getAllArticles,
    getArticleById,
};
