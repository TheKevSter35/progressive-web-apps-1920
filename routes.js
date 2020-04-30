module.exports = function (app) {
  let fetch = require('node-fetch');
  app.get("/", function (req, res) {

    fetch(`
    https://api.giphy.com/v1/gifs/search?api_key=${process.env.API_KEY}&q=cats&limit=20&offset=0&rating=G&lang=en`)
      .then(async response => {
        const giphy = await response.json()
        // console.log(giphy)
        res.render('pages/index', {
          giphy


        });
      });
  });

  app.get("/search", function (req, res) {
    const searchWord = req.query.searchWord;
    fetch(`https://api.giphy.com/v1/gifs/search?api_key=${process.env.API_KEY}&q=${searchWord}&limit=20&offset=0&rating=G&lang=en`)
      .then(async response => {
        const giphy = await response.json()
        // console.log(giphy)
        res.render('pages/search', {
          title: (searchWord),
          giphy

        });
      });
  });
  app.get('/offline', (req, res) => {
    res.render('pages/status/offline')
  })

  app.get('/:id', (req, res) => {
    fetch(`https://api.giphy.com/v1/gifs/${req.params.id}?api_key=${process.env.API_KEY}`).then(response => response.json())
      .then((detail) => {
        res.render('pages/detail', {
          detail: {
            ...detail
          },

        })
      })
  })


  app.use(function (req, res, next) {

    res.status(404).render('pages/status/404');
  });

}