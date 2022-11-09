const express = require("express");
const bodyParser = require('body-parser')
const app = express();
const port = 4000;

const cors = require("cors");

// Enable Cors rules
app.use(cors());
app.use(function (req, res, next)
{
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// Middleware
app.use(bodyParser.urlencoded({ extended: false }))

app.get('/', (req, res) =>
{
    res.send('Welcome to Data Representation & Querying')
})

app.get('/hello/:name', (req, res) =>
{
    res.send('Hello ' + req.params.name)
})

let jsonBooksData =
{
    "books": [
        {
            "title": "Learn Git in a Month of Lunches",
            "isbn": "1617292419",
            "pageCount": 0,
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/umali.jpg",
            "status": "MEAP",
            "authors": [
                "Rick Umali"
            ],
            "categories": []
        },
        {
            "title": "MongoDB in Action, Second Edition",
            "isbn": "1617291609",
            "pageCount": 0,
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/banker2.jpg",
            "status": "MEAP",
            "authors": [
                "Kyle Banker",
                "Peter Bakkum",
                "Tim Hawkins",
                "Shaun Verch",
                "Douglas Garrett"
            ],
            "categories": []
        },
        {
            "title": "Getting MEAN with Mongo, Express, Angular, and Node",
            "isbn": "1617292036",
            "pageCount": 0,
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/sholmes.jpg",
            "status": "MEAP",
            "authors": [
                "Simon Holmes"
            ],
            "categories": []
        }
    ]
}


app.get('/api/books', (req, res) =>
{
    res.json(jsonBooksData)
})

app.post('/api/books', (req, res) =>
{

    console.log(req.body);
    jsonBooksData.books.push({ title: json.title, year: json.year, thumbnailUrl: json.url })
})


app.get('/test', (req, res) =>
{
    var options = {
        root: path.join(__dirname)
    };
    res.sendFile("./index.html", options)
})

app.get('/name', (req, res) =>
{
    res.send("Hi " + req.query.first + " " + req.query.last)
})

app.post('/name', (req, res) =>
{
    console.log(req.body.first);
    res.send("First Name: " + req.body.first)
})

app.listen(port, () =>
{
    console.log(`Example app listening on port ${port}`)
})