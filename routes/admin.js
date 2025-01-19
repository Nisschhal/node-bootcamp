const path = require("path")

const express = require("express")

const rootDir = require("../util/path")

const router = express.Router()

// data storage : post []
const products = []

// /admin/add-product => GET
router.get("/add-product", (req, res, next) => {
  // res.sendFile(path.join(rootDir, "views", "add-product.html"))
  res.render("add-product", {
    path: "/admin/add-product",
    pageTitle: "Add product",
  })
})

// /admin/add-product => POST
router.post("/add-product", (req, res, next) => {
  const { title } = req.body
  const newPost = { title }
  products.push(newPost)
  res.redirect("/")
})

module.exports = router
module.exports.products = products
