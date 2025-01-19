exports.getAddProduct = (req, res, next) => {
  // res.sendFile(path.join(rootDir, "views", "add-product.html"))
  res.render("add-product", {
    path: "/admin/add-product",
    pageTitle: "Add product",
  })
}

exports.postAddProduct = (req, res, next) => {
  const { title } = req.body
  const newPost = { title }
  products.push(newPost)
  res.redirect("/")
}
