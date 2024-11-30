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


const insertArticle = async (req, res) => {
    const {
        id,
        title,
        short_description,
        content,
        author_name,
        author_avatar,
        author_role,
        published_at,
        reading_time,
        categories,
        images,
        tags,
    } = req.body;

    try {
        const query = `
            INSERT INTO article_details (
                id, title, short_description, content, 
                author_name, author_avatar, author_role, 
                published_at, reading_time, categories, 
                images, tags
            ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        `;

        const values = [
            id, title, short_description, content,
            author_name, author_avatar, author_role,
            published_at, reading_time, JSON.stringify(categories),
            JSON.stringify(images), JSON.stringify(tags)
        ];

        await pool.query(query, values);
        res.status(201).json({ success: true, message: "Article inserted successfully" });
    } catch (error) {
        console.error("Error inserting article:", error);
        res.status(500).json({ success: false, message: "Failed to insert article" });
    }
};


const deleteArticle = async (req, res) => {
    const { id } = req.params;

    try {
        const [result] = await pool.query('DELETE FROM article_details WHERE id = ?', [id]);
        if (result.affectedRows > 0) {
            res.status(200).json({ success: true, message: "Article deleted successfully" });
        } else {
            res.status(404).json({ success: false, message: "Article not found" });
        }
    } catch (error) {
        console.error("Error deleting article:", error);
        res.status(500).json({ success: false, message: "Failed to delete article" });
    }
};

module.exports = {
    getAllArticles,
    getArticleById,
    insertArticle,
    deleteArticle,
};
