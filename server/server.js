const express = require('express'); //assign express function to the express var (express is a function)
const bodyParser = require('body-parser');


const app = express(); //creates an instance of express-- calls the function
const port = 5000; //port for local server we are using

app.use(express.static('server/public')); //tells the express function to use index.html in the public folder, which is inside the server folder
//first thing express.static looks for is index.html ^^
app.use(bodyParser.urlencoded({extended: true})); //tells app to use body-parser

let quotes = [
    {quote: "I said that", who: "casie"},
    {quote: "woof woof", who: "corey"},
    {quote: "you miss 100% of the shots you don't take", who: "m scott"}
];

//logs our quotes array to console when server runs
console.log("this is quotes", quotes);

//if i visit url of '/quotes', run get request and do the function (needs a 'req' and 'res' param in function)
app.get('/quotes', function(req, res) {
    console.log('we are in the get request');
    //the one thing every route needs is a RESPONSE!!!! do it EVERY TIME-- every request needs to respond with SOMETHING
    res.send(quotes);
});


//put this at bottom of express projects
app.listen(port, () => { //anon function will only run in this port
    console.log('listening on port: ', port); //tells us in terminal that we are on port 5000.
}); 



