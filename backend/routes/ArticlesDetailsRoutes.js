const express = require("express");
const {
    getAllArticles,
    getArticleById,
    insertArticle,
    deleteArticle,
} = require("../controllers/ArticlesDetailsController");

const router = express.Router();

router.get("/", getAllArticles);
router.get("/:id", getArticleById);
router.post("/", insertArticle);
router.delete("/:id", deleteArticle);

module.exports = router;
