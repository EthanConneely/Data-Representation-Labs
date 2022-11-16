const Express = require("express");
const BodyParser = require('body-parser')
const cors = require("cors");
const Mongoose = require("mongoose");
const app = Express();
const port = 4000;

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
app.use(BodyParser.json())

// Connect to mongodb server
const mongoDB = "mongodb+srv://Ethan:ghjk@cluster0.n4grbrf.mongodb.net/?retryWrites=true&w=majority";
Mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });

// Get the default connection
const db = Mongoose.connection;

// Bind connection to error event (to get notification of connection errors)
db.on("error", console.error.bind(console, "MongoDB connection error:"));

// Connecto to the books database
let books = db.useDb("books")

// create a book schema
const bookSchema = new Mongoose.Schema({
    title: String,
    year: Number,
    author: String,
    thumbnailUrl: String,
});

// create the books model
const BookModel = books.model("BookModel", bookSchema);


// Get books api route
app.get('/api/books', async (req, res) =>
{
    console.log("get books api");
    let books = await BookModel.find()
    res.json(books)
})

// Post books route
app.post('/api/books', async (req, res) =>
{
    let result = req.body;

    // create the model for the database
    let book = new BookModel();
    book.title = result.title;
    book.year = result.year;
    book.thumbnailUrl = result.thumbnailUrl;
    book.author = result.author;

    // save to book to the mongoose data base
    book.save(OnError);
})

// Get book by id eg http://localhost:4000/api/book/6374e1c50250dc4fd4b56048
app.get('/api/book/:id', async (req, res) =>
{
    console.log(req.params.id);
    let book = await BookModel.findById(req.params.id)
    console.log(book);
    res.json(book)
})


app.listen(port, () =>
{
    console.log(`Example app listening on port ${port}`)
})

function OnError(err)
{
    if (err)
    {
        console.error(err)
        // throw err;
    }
}
