const Product = require("../models/product")

// GET products
exports.getIndex = (req, res) => {
  // res.sendFile(path.join(rootDir, "views", "shop.html"))
  // featchProducts gives the callback which has access to ready products to work on
  Product.fetchProducts((products) => {
    res.render("shop/index", {
      prods: products,
      pageTitle: "Shop",
      path: "/",
    })
  })
}

exports.getProducts = (req, res, next) => {
  Product.fetchProducts((products) => {
    res.render("shop/product-list", {
      prods: products,
      pageTitle: "All Products",
      path: "/products",
    })
  })
}
