require('dotenv').config();
let express = require('express')
let bodyParser = require('body-parser');
let path = require('path');
let fetch = require('node-fetch');
let app = express()
let port = 3000

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

app.get("/", function (req, res) {
  fetch(`
  https://api.giphy.com/v1/gifs/search?api_key=${process.env.API_KEY}&q=random+life&limit=20&offset=0&rating=G&lang=en`)
    .then( async response => {
    const giphy = await response.json()
    // console.log(giphy)
       res.render('pages/overview', {
    title: "start",
    giphy
    
  });
});
});

app.get("/search", function (req, res) {
  const searchWord = req.query.searchWord;
  fetch(`https://api.giphy.com/v1/gifs/search?api_key=${process.env.API_KEY}&q=${searchWord}&limit=20&offset=0&rating=G&lang=en`)
    .then( async response => {
      
    const giphy = await response.json()
    // console.log(giphy)
       res.render('pages/search', {
    title: "start",
    giphy
    
  });
});
});

app.get('/:id', (req, res) => {
  Promise.all([
  fetch(`https://api.giphy.com/v1/gifs/${req.params.id}?api_key=${process.env.API_KEY}`).then(response => response.json()) ])
    .then(([detail]) => {
      console.log([detail])
      res.render('pages/detail', {
        title: detail.title,
        giphy: {...detail}
      })
    })
})
app.use(function (req, res, next) {
  
  res.status(404).render('pages/status/404');
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))