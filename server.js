const express = require("express");
const app = express();
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
const cookieParser = require('cookie-parser');

const port = process.env.PORT || 5000 ;

mongoose.connect("mongodb://shopp:pass123!@ds151076.mlab.com:51076/shoppapp-db", { useNewUrlParser: true });
//Configure bodyparser to handle post requests
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cookieParser());
//Initialize routes


app.use('/api', require('./nodeJs/routes/api'));

//Serve static assets
if (process.env.NODE_ENV == 'production') {
    app.use(express.static('my-app/build'));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'my-app', 'build', 'index.html'))
    })
}

app.listen(port, () => console.log("Server started"));
