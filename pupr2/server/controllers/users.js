let mongoose = require('mongoose');
let User = mongoose.model("User");
let bcrypt = require('bcrypt');

module.exports = {
    session: function(req, res){
        if(req.session.user_id){
            return res.json({
                status: true,
                user_id: req.session.user_id
            })
        }
        return res.json({ status: false })
    },

    index: function(req, res){
        User.find({}, function(err, users){
            if(err){
                return res.json(err);
            }
            return res.json(users);
        })
    },

    login: function(req, res) {
        // console.log('does this even run')
        // console.log(req.body)
      User.findOne({alias: req.body.alias}, (err, user_login) => {
        //   console.log(user_login)
        if(user_login == null) {
            let errors = ["Username does not exist. Please register."];
          return res.status(400).send(errors);
        }
        else{
          if(bcrypt.compare(req.body.password, user_login.password)) {
            req.session.user_id = user_login._id;
            return res.json(true);
          }
          else {

            let errors = ["Incorrect password."];
            return res.status(400).send(errors);
          }
        }
      })
    },

    create: function(req, res){
        console.log("in the user controller");
        User.findOne({email: req.body.email}, (err, foundUser) =>{
            if(err){
                let errors = [];
                for(let i in err.errors){
                    errors.push(err.errors[i].message);
                }
                return res.status(400).send(errors);
            } else {
                if(foundUser == null){
                    // user does not exist in db
                    let user = new User(req.body);
                    user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10));
                    user.save( (err, savedUser) => {
                        if(err){
                            let errors = [];
                            for(let i in err.errors){
                                errors.push(err.errors[i].message)
                            }
                            return res.status(400).send(errors);
                        } else {
                            req.session.user_id = savedUser._id
                            return res.json(savedUser)
                        }
                    })
                } else {
                    let errors = ["Email already registered, please try a different email"];
                    return res.status(400).send(errors);
                }
            }
        })
    },

    update: function(req, res){
        User.update(req.body, function(err, user){
            if(err){
                console.log('cant update')
            } else {
                user.save(function(err) {
                    if (err) {
                      console.log("error at update", err)
                    } else {
                      res.json(user)
                    }
                  })
        }
    })
},




    locationUpdate: function(req, res) {
      console.log("################Printing req.body ", req.body)
      User.findOne({ _id: req.body[1]}, function(err, currentUser) {
        if(err) {
          console.log(err);
        } else {
          currentUser.swipeLocation = req.body[0]
          currentUser.save(function(err) {
            if (err) {
              console.log(err)
            } else {
              res.json({
                message: "Success"
              })
            }
          })
        }
      })
    },
    addToFavorites: function(req, res){
      console.log("Came into addToFavorites")
      User.findOne({ _id: req.body.userID}, function(err, currentUser) {
        if (err) {
          console.log(err);
        } else {
          currentUser.favorites.push(req.body.dogID);
          currentUser.save(function(err) {
            if (err) {
              console.log("error at favorites saves", err)
            } else {
              res.json(currentUser)
            }
          })
        }
      })
    },
    logout: function(req, res){
        if(req.session.user_id){
            delete req.session.user_id
        }
        return res.json({ status: true })
    }
}
