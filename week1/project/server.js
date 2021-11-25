const express = require("express")
const app = express()
const morgan = require('morgan')
const mongoose = rquire('mongoose')

//middleware(forevery request)
app.use(express.jason())
app.use(moragan('dev'))

//Conect to DB
mongoose.connect('mongodb://localhost:27017/moviesdb',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    },
    () => console.log("connected to the DB")
)

//Routes
app.use("/movies", require("./routes/movieRouter.js"))
app.use("/tvshows", require("./routes/tvshowsRouter.js"))

//Error handaler
app.use((err, req, res, next) => {
    console.log(err)
    return res.send({errMsg: err.message})
})

//Server listen
app.listen(9000, () => {
    console.log("The server is running on port 9000")
})