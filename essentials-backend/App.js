require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const fileupload = require('express-fileupload')
//const Router = require("./routes")


const app = express()
app.use(express.json())
app.use(cors())
app.use(cookieParser())
app.use(fileupload({
    useTempFiles: true
}))


// Routes
app.use('/user', require('./routes/userRouter'))

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/EssentialsDB',
  {
    useNewUrlParser: true,
    //useFindAndModify: false,
    useUnifiedTopology: true
  }, err => {
    if(err) throw err;
    console.log("Connected successfully")
})

// const db = mongoose.connection;
// db.on("error", console.error.bind(console, "connection error: "));
// db.once("open", function () {
  
// })

app.listen(3000, () => {
    console.log("Initializing the Essentials Backend");
  })

// app.use('/', (req, res, next) => {
//     res.json({msg: "Hello Everyone"})
// })

// const PORT = process.env.PORT || 3000
// app.listen(PORT, () => {
//     console.log('Server is running on port', PORT)
// })

//console.log("Initializing the Essentials Backend.")