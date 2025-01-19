const express = require("express")

const {
  getAddProduct,
  getPostProduct,
  getProducts,
} = require("../controllers/adminControllers")

const router = express.Router()

// /admin/products => GET
router.get("/products", getProducts)

// /admin/add-product => GET
router.get("/add-product", getAddProduct)

// /admin/add-product => POST
router.post("/add-product", getPostProduct)

module.exports = router
