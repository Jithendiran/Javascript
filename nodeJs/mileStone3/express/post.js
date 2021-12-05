/**
 * Documenter   : Jithendiran
 * Date         : 18-11-2021
 */
const express = require('express')
const path = require('path')
const app = express()

const PORT = process.env.PORT || 3000


const data = []

app.use(express.json())
app.use(express.urlencoded({ extended: false }))


app.post('/', (req, res) => {
    console.log(req.body);
    data.push(req.body)

    res.send("Hi")
})

app.listen(PORT, () => {
    console.log("Server Started");
    console.log(`http://localhost:${PORT}/`);
})