const express = require("express")

const app = express()

app.use((req, res, next) => {
  console.log("I am in middleware")
  next()
})

app.use("/add-product", (req, res, next) => {
  console.log("/add-product".startsWith("/"))
  res.send("<h1>Hello from express add product</h1>")
})
app.use("/", (req, res) => {
  res.send("<h1>Will i run </h1>")
})
app.listen(3000)
