/**
 * Documenter   : Jithendiran
 * Date         : 17-11-2021
 */

const express = require('express')
const path = require('path')
const app = express()

const data = [
    { id: 1, name: 'Jith' },
    { id: 2, name: 'Jidesh' },
    { id: 3, name: 'Jithendiran' }
]

//setup static and middleware
app.use(express.static('./public')) // all the static like(js,css) files are in this folder 

app.get('/', (req, res) => {
    console.log(path.resolve(__dirname, './home.html'))//home/jidesh/Work/temp/express/home.html
    res.sendFile(path.resolve(__dirname, './home.html'))
})

app.get('/data', (req, res) => {
    //get all data
    res.json(data)
})
app.get('/data/:id', (req, res) => {
    let d = data.find(datum => datum.id == req.params.id)
    if (d === undefined) {
        res.status(404).send("<h1>Resouce Not Found</h1>")
    }
    else {
        res.json(d)
    }
})
//query
app.get('/data/preview/:id', (req, res) => {

    let d = data.find(datum => datum.id == req.params.id)
    if (!d) {
        res.status(404).send("<h1>Resouce Not Found</h1>")
    }
    else {
        res.send(`The query are = ${JSON.stringify(req.query)} for the data ${JSON.stringify(d)}`)
    }

})
//it works for all methods(get,put,post,..) if resouce not found
app.all('*', (req, res) => {
    //it defaultly set status to 200
    //so set it to 404

    res.status(404).send("<h1>Resouce Not Found</h1>")
})



const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log("Listening......");
    console.log(`http://localhost:${port}/`);
})

