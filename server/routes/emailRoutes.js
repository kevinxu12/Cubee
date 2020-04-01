// fill out with send and confirm email routes
const mongoose = require('mongoose');
const User = mongoose.model('User');
const msgs = require('./email/emailMessages');
const templates = require('./email/templates.js');
const sendEmail = require('./email/send')

module.exports = (app) => {
    app.get('/api/sendEmail/:email', (req, res) => {
        User.findOne({ email: req.params.email}, (err, newUser) => {
            if(err) {
                console.log(err);
                res.end();
            }
            //console.log(templates.confirm(newUser.email));
            //res.end();
            sendEmail(newUser.email, templates.confirm(newUser.email));
            res.end();
        });
    })

    app.get('/api/confirmEmail/:email', (req, res) => {
        const email = req.params.email
        console.log(email);
        User.findOne({email: email}, (err, user) => {
            if(err) {
                console.log("err");
                res.send({error: error});
            }
            // A user with that id does not exist in the DB. Perhaps some tricky 
            // user tried to go to a different url than the one provided in the 
            // confirmation email.
            if (!user) {
              res.send({error: "didn't find user"})
            }
            
            // The user exists but has not been confirmed. We need to confirm this 
            // user and let them know their email address has been confirmed.
            else if (user && !user.confirmed) {
              User.findOneAndUpdate({email: email}, { confirmed: true }, (req, response) => {
                  if(response) {
                      res.send(response);
                  }
              })
                
            }
      
            // The user has already confirmed this email address.
        })
      
    })
}