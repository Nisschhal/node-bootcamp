const fs = require("fs")
const path = require("path")
const Product = require("../models/product")
const Cart = require("../models/cart")
const cartPath = path.join(require.main.path, "data", "cart.json")
exports.getProducts = (req, res, next) => {
  Product.fetchAll((products) => {
    res.render("shop/product-list", {
      prods: products,
      pageTitle: "All Products",
      path: "/products",
    })
  })
}

exports.getProductById = (req, res, next) => {
  const { productId } = req.params
  console.log(productId)
  Product.fetchById(productId, (product) => {
    res.render("shop/product-detail", {
      product,
      pageTitle: "Product Details",
      path: "/products",
    })
  })
}

exports.getIndex = (req, res, next) => {
  Product.fetchAll((products) => {
    res.render("shop/index", {
      prods: products,
      pageTitle: "Shop",
      path: "/",
    })
  })
}

exports.getCart = (req, res, next) => {
  res.render("shop/cart", {
    path: "/cart",
    pageTitle: "Your Cart",
  })
}

exports.postCart = (req, res, next) => {
  const { productId } = req.body
  Product.fetchById(productId, (product) => {
    Cart.addProduct(productId, product.price)
    // fs.writeFile(cartPath, JSON.stringify(product))
  })
  res.redirect("/cart")
}
exports.getOrders = (req, res, next) => {
  res.render("shop/orders", {
    path: "/orders",
    pageTitle: "Your Orders",
  })
}

exports.getCheckout = (req, res, next) => {
  res.render("shop/checkout", {
    path: "/checkout",
    pageTitle: "Checkout",
  })
}
