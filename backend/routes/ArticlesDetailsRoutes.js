const express = require("express");
const { getAllArticles, getArticleById } = require("../controllers/ArticlesDetailsController");

const router = express.Router();


router.get("/", getAllArticles);

router.get("/:id", getArticleById);

module.exports = router;
