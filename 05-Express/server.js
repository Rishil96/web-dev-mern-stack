import express from "express"
import userRouter from "./routes/users.js"

// Calling express as a function creates an app object
const app = express();

// Set view engine to render html
app.set('view engine', 'ejs');
// Use middleware to log paths for every request
app.use(logger);
// Allows rendering static html files in folder mentioned
app.use(express.static("public"));
// Allows express to access information that comes in request body
app.use(express.urlencoded({ extended: true }));
// Allows json data accept from request
app.use(express.json());


// Create a GET route
app.get('/', (req, res) => {
    console.log("Here in / path");
    // Send a JSON response with status code
    // res.status(201).json({message: "Created!"});
    
    // Send a path to download the file 
    // res.download('05-Express/express-notes.md');

    // Render html on endpoint, 
    // to pass backend data to frontend add JSON object as second parameter
    // and render using templating language check index.ejs
    res.render('index', {author: "Rishil Ramesh"});
})

app.get("/query", (req, res) => {
    res.send(`So your name is ${req.query.name}`);
})

app.use('/users', userRouter);

// Create a logger middleware
function logger(req, res, next) {
    console.log("Path: ", req.originalUrl);
    next();
}


// To make our server run on a given port
app.listen(3000);

