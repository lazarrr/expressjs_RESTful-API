const express = require("express")
const user_route = require("./routes/userRoute")
const login_route = require("./routes/loginRoute")
const signup_route = require("./routes/signupRoute")
const body_parser = require("body-parser")


const app = express()


// middleware
// this hendles cros access
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Headers", "*")
    next()
  })

app.use(body_parser.urlencoded({extended: true}))
app.use(body_parser.json())
app.use(express.json())

// routes
app.use("/",user_route)
app.use("/login",login_route)
app.use("/signup",signup_route)

// if someone try to access to non existing route
app.use((req, res, next) => {
  const error = new Error("Not found")
  error.status = 404
  next(error)
})

app.use((error, req, res, next) => {
  res.status(error.status || 500)
  res.json({
    error:{
      message: error.message
    }
  })
})

module.exports = app