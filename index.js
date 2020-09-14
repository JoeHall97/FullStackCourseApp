const express = require('express'); //import express library
const app = express(); //set up an express server

app.get('/',(req, res) => {
    res.send({ hi:'there' });
}); //create a route handler for '/', return a JSON

const PORT = process.env.PORT || 5000; //get port number from env, or set port to 5000
app.listen(PORT);