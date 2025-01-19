const fs = require("fs")
// storage for products
const Product = require("../models/product")
// GET ADD PRODUCT PAGE
exports.getAddProduct = (req, res, next) => {
  // res.sendFile(path.join(rootDir, "views", "add-product.html"))
  res.render("add-product", {
    path: "/admin/add-product",
    pageTitle: "Add product",
  })
}

// POST on ADD PRODUCT PAGE
exports.postAddProduct = (req, res, next) => {
  const { title } = req.body
  const product = new Product(title)
  product.save()
  // products.push(newPost)

  res.redirect("/")
}

// GET products
exports.getProducts = (req, res, next) => {
  // res.sendFile(path.join(rootDir, "views", "shop.html"))
  Product.fetchProducts((products) => {
    res.render("shop", {
      prods: products,
      pageTitle: "Shop",
      path: "/",
    })
  })
}
