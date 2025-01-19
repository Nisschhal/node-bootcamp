const express = require("express")

const app = express()

app.use((req, res, next) => {
  console.log("I am in middleware")
  next()
})

app.use((req, res) => {
  res.send("<h1>Hello from express last middleware</h1>")
})
app.listen(3000)
