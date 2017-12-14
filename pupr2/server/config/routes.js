let path = require('path');
let Users = require('../controllers/users');
let Pups = require('../controllers/pups');


module.exports = function(app){

    //users routes

    app.post('/users', Users.create);
    app.get('/users', Users.index);
    app.put('/users', Users.update);
    app.post('/login', Users.login);
    app.post('/locationUpdate', Users.locationUpdate);
    app.post('/addToFavorites', Users.addToFavorites);
    app.post('/pups', Pups.create);
    app.post('/upload', Pups.upload);
    app.get('/pups', Pups.index);
    app.delete('/sessions/:id', Users.logout);


    app.all('*', function (req, res, next){
      res.sendFile(path.resolve('./public/dist/index.html'));
  })
}
