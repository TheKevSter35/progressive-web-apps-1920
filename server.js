require('dotenv').config();
let express = require('express')
let bodyParser = require('body-parser');
let path = require('path');
let app = express()
let port = process.env.PORT || 3000
let compression = require('compression')

//compress html and CSS
app.use(compression())

//view Engines 
app.set('view engine', 'ejs');
app.set('views', 'views');


app.use(express.static('public'))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));


// Set Static path for non html code like pictures and CSS
app.use(express.static(path.join(__dirname + 'public')));

require('./routes')(app);

app.listen(port, () => console.log(`Example app listening on port ${port}!`))