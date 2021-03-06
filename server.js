const express = require("express")
const bodyParser = require("body-parser")
const path = require("path")
const app = express()
const PORT = process.env.PORT || 8080
const apiRoutes = require("./routes/index")
const mongoose = require("mongoose")

app.use(express.static(path.join(__dirname, "build")))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/drumMachineUsers",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })

app.use(apiRoutes)

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "build", "index.html"))
})

app.listen(PORT, function () {
    console.log(`listning on ${PORT}`)
})