import express from "express"
import userRouter from "./routes/users.js"

// Calling express as a function creates an app object
const app = express();

// Set view engine to render html
app.set('view engine', 'ejs');

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

app.use('/users', userRouter);

// To make our server run on a given port
app.listen(3000);

