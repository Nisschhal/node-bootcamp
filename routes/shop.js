const express = require("express")

const { getProducts, getIndex } = require("../controllers/products")
const { getCart, getCheckout } = require("../controllers/shop")

const router = express.Router()

// / => GET
router.get("/", getIndex)

// /products => GET
router.get("/products", getProducts)

// /cart => GET
router.get("/carts", getCart)

// /checkout => GET
router.get("/checkout", getCheckout)

module.exports = router
