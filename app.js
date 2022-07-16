// Importing Express JS
const express = require('express');

// Creating Express App
const app = express();

// Setting the directory for serving static files
app.use(express.static('views'));

// Listening for requests on Port 3000
app.listen(process.env.PORT || 3000);

// Sending the Index page
app.get('/', (req, res) => {
    res.sendFile('./views/index.html', { root: __dirname });
});

// Sending the About page
app.get('/about', (req, res) => {
    res.sendFile('./views/about.html', { root: __dirname });
});

// Redirecting
app.get('/about-us', (req, res) => {
    res.redirect('/about');
});

// Sending the Error Page
app.use((req, res) => {
    res.status(404).sendFile('./views/error.html', { root: __dirname });
});