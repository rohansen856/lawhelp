const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")
const ArticlesRoutes = require("./routes/ArticlesRoutes")
const ArticlesDetailsRoutes = require("./routes/ArticlesDetailsRoutes");

const app = express()
const PORT = process.env.PORT || 3001

app.use(cors())
app.use(bodyParser.json())

app.use("/api/legal-items", ArticlesRoutes)
app.use("/api/articles", ArticlesDetailsRoutes);

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`)
})
