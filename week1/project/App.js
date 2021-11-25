const express = require("express")
const app = express()

app.get('/', (req, res) => {
    res.send("Good Morning, Dave.")
})

app.listen(3000, () => {
    console.log("The App is listening to port 3000.")
})