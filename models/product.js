const path = require("path")
const fs = require("fs")
const productPath = path.join(require.main.path, "data", "products.json")
const products = []
// callbacks has the access to parsed data

const getProductFromFile = (callback) => {
  fs.readFile(productPath, (err, fileContentInString) => {
    // if error in reading file return empty array to callback
    if (err) return callback([])
    // if succesfully return parsedJson paroduc array
    const parsedProduct = JSON.parse(fileContentInString)
    return callback(parsedProduct)
  })
}

module.exports = class Product {
  constructor(title) {
    this.title = title
  }
  // read the file
  // store the read file in array
  // push the new product to that array
  // write the file

  save() {
    getProductFromFile((products) => {
      products.push(this) // Add the current product

      fs.writeFile(productPath, JSON.stringify(products), (err) => {
        if (err) {
          console.error("Error saving product:", err)
        }
      })
    })
  }
  static fetchProducts(callback) {
    // fs.readFile(productPath, (err, fileContentInString) => {
    //   if (err) callback([])
    //   callback(JSON.parse(fileContentInString))
    // })
    getProductFromFile(callback)
  }
}
