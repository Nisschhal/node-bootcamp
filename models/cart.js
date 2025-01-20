const fs = require("fs")
const path = require("path")
const Product = require("./product")
const { json } = require("stream/consumers")
const cartPath = path.join(require.main.path, "data", "cart.json")
module.exports = class Cart {
  static addProduct(id, productPrice) {
    // fetch previous cart
    fs.readFile(cartPath, (err, fileContentInString) => {
      let cart = { products: [], totalPrice: 0 }
      if (!err) {
        cart = JSON.parse(fileContentInString)
      }
      // analyse if exist and by its index to update it later
      const existingProductIndex = cart.products.findIndex(
        (product) => product.id === id
      )
      const existingProduct = cart.products[existingProductIndex]
      let updatedProduct
      // if product already exist update its qty or create new product and replace old one with new qty
      if (existingProduct) {
        updatedProduct = { ...existingProduct }
        updatedProduct.qty = updatedProduct.qty + 1
        cart.products[existingProductIndex] = updatedProduct
      } else {
        // if not found, add the new product to cart prducts list
        updatedProduct = { id, qty: 1 }
        cart.products = [...cart.products, updatedProduct]
      }
      // lastly update the totalPrice, as price of product will be there as well.
      // but this only works if there is no increment or decrement in qty, meaning only one item to add in cart at a time so price will be of single each time

      cart.totalPrice = cart.totalPrice + +productPrice
      fs.writeFile(cartPath, JSON.stringify(cart), (err) => {
        console.log("error while writing cart into file", err)
      })
    })
    // if exist, increase qty
    // if not, add new product
  }
}
