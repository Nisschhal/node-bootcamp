const path = require("path")

const express = require("express")
const bodyParser = require("body-parser")

const app = express()

// register template engine: ejs
app.set("view engine", "ejs")
// app.set("views", "views") // default is views as well

// local routes import
const adminRoutes = require("./routes/admin")
const shopRoutes = require("./routes/shop")

// middlware: bodyParser for chunk data | static file server for css from public
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, "public")))

// local routes uses
app.use("/admin", adminRoutes)
app.use(shopRoutes)

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, "views", "404.html"))
})

app.listen(3000)
