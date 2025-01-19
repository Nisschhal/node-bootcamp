// storage for products
const products = []

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
  const newPost = { title }
  products.push(newPost)
  res.redirect("/")
}

// GET products
exports.getProducts = (req, res, next) => {
  // res.sendFile(path.join(rootDir, "views", "shop.html"))
  res.render("shop", {
    prods: products,
    pageTitle: "Shop",
    path: "/",
  })
}
