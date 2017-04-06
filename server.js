
let express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    bodyParser = require('body-parser'),
    mongoose = require('mongoose');

// app.use(express.static('public'));

//parse application/json and look for raw text                                        
app.use(bodyParser.json());                                     
app.use(bodyParser.urlencoded({extended: true}));               
app.use(bodyParser.text());                                    
app.use(bodyParser.json({ type: 'application/json'})); 

// var routes = require('./api/routes/queueRoutes');
// routes(app);

app.get("/", (req, res) => res.json({message: "Welcome to our Jorder!"}));


app.listen(port, function () {
  console.log('Server started on http://127.0.0.1:%s', port)
})

module.exports = app;