const express = require('express')// loads the express package
const app = express() // create and start the express server
const port = 3000 // define the express port - where the requests are being able to 

app.use(express.static('public')) // tells express where the static files are located

// Define Routes

// Homepage Route
app.get('/', (req, res) => {
    res.sendFile(`${__dirname}/views/home-page.html`)
})

// About page route
app.get('/about', (req, res) => {
    res.sendFile(`${__dirname}/views/about-page.html`)
})

// Start the server// this will tell us where the app is running in our project
app.listen(port, () => { console.log(`App is running on port ${port}`) })