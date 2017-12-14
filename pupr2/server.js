let express = require("express");
let bp = require("body-parser");
let morgan = require('morgan');
let session = require("express-session");

let app = express();

const path = require('path');

app.use(express.static(path.join(__dirname, '/public/dist')));
//app.use(express.static(__dirname + "/public/dist"));
app.use(bp.json());
app.use(morgan('tiny'));
app.use(session({
    secret: 'mysupersecretsecret',
    resave: false,
    saveUninitialized: true,
    cookie: {}
}))

require('./server/config/mongoose');

require('./server/config/routes')(app);

app.listen(8000, function(){
  console.log('listening on port 8000...')
})
