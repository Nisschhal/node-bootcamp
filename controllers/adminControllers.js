// storage for products
const Product = require("../models/product")
// GET ADD PRODUCT PAGE
exports.getAddProduct = (req, res, next) => {
  // res.sendFile(path.join(rootDir, "views", "add-product.html"))
  res.render("admin/add-product", {
    path: "/admin/add-product",
    pageTitle: "Add product",
  })
}

// POST on ADD PRODUCT PAGE
exports.getPostProduct = (req, res, next) => {
  const { title } = req.body
  const product = new Product(title)
  product.save()
  // products.push(newPost)

  res.redirect("/")
}

exports.getProducts = (req, res, next) => {
  Product.fetchProducts((products) => {
    res.render("admin/products", {
      prods: products,
      pageTitle: "Admin Products",
      path: "/admin/products",
    })
  })
}
