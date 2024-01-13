const express = require("express");
const app = express();

// Handling OPTIONS requests (preflight)
app.options('*', (req, res) => {
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.status(200).send();
});

// CORS middleware
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});
// Your existing routes
const coursesRoute = require("./routes/courses.routes");
const clientRouter = require('./routes/clientRouter');
app.use("/courses", coursesRoute);
app.use("/clients", clientRouter);

app.get("/", (req, res) => {
    res.end(" start server 2 ");
});

app.listen(5000, () => {
    console.log("server 2 start and listen to port 5000");
});

