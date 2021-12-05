/**
 * Documenter   : Jithendiran
 * Date         : 18-11-2021
 */

const express = require('express')
const path = require('path')
const app = express()

const data = [
    { id: 1, name: 'Jith' },
    { id: 2, name: 'Jidesh' },
    { id: 3, name: 'Jithendiran' }
]

//middleware it execute in between when request comes in and respond out
//all the code that respond is a type of middleware

//to send a data from middleware to next middleware set the value using req or res 
//eg:req.data = value or res.data = value
//not pass value by next(value) it not execute

/**
 * logging some details
 * @param {request} req request from the user
 * @param {response} res response to user
 * @param {function} next function to be executed after completion of middleware
 */
const logger = (req, res, next) => {
    console.log("Inside middle ware");
    console.log(req.url);
    next()
}

//always execute middleware
//no need to pass as argument in any methods
const always = (req, res, next) => {
    console.log("Always executed");
    next()
}
app.use(always)//it is global middleware execute always first
//to execute multiple middleware function
//app.use([m1,m2,..]) //it execute in the order

//no need of next because it automatically executed atlast
//to execute this function the previous running function must cintain next()
const lastExecute = (req, res) => {
    console.log("Last execute");
}



//it also a middleware
//it not contain next parameter because this is the last piece of code to be executed
app.get('/', logger, (req, res) => {
    res.sendFile(__dirname + '/home.html')
})

/*
O/p
Listening......
http://localhost:3000/
Always executed
Inside middle ware
*/

app.get('/data', (req, res) => {
    //get all data
    res.json(data)

})
/*
O/p
Listening......
http://localhost:3000/
Always executed
*/

app.get('/d', (req, res, next) => {
    console.log("Inside next");
    res.send("hii")
    next()
})
/*
O/p
Listening......
http://localhost:3000/
Always executed
Inside next
Last execute
*/

app.use(lastExecute)//due to this statement it execute last

//it works for all methods(get,put,post,..) if resouce not found
app.all('*', (req, res) => {
    //it defaultly set status to 200
    //so set it to 404

    res.status(404).send("<h1>Resouce Not Found</h1>")
})

//app.use(lastExecute)//due to this statement it execute last  why it don't work here

/*
O/p
Listening......
http://localhost:3000/
Always executed
*/






const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log("Listening......");
    console.log(`http://localhost:${port}/`);
})



//Reference
//https://www.youtube.com/watch?v=lY6icfhap2o