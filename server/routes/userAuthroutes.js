const mongoose = require('mongoose');
const User = mongoose.model('User');

module.exports = (app) => {
    app.post('/api/userLogin', (req, res) => {
        var email = req.body.email
        User.findOne({
            email: email,
        }, (err, response) => {
            if (err) {
                console.log({error: "random error"});
            } else {
                if (!response) {
                    res.send({error: "wrong email"});
                } else {
                    if (response.password === req.body.password) {
                        console.log("Success login");
                        req.session.user = response;
                        if(!response.confirmed) {
                            res.send({error: "account not confirmed"});
                        }
                        res.send(response);
                    } else {
                        res.send({error: "wrong password"});
                    }
                }
            }
        })
    })

    app.post('/api/userSignup', (req, res) => {
        var newUser = new User({
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            email: req.body.email,
            password: req.body.password
        })
        console.log(req.body.email);
        // first check if the email already exists
        User.findOne({ email: req.body.email }, (err, response) => {
            if (err) {
                res.send({error: "error while finding user in signup"});
            }
            if (response) {
                res.send({error: "error user already exists"})
            } else {
                newUser.save(function (err, response) {
                    console.log("New user" + response);
                    if (err) {
                        res.send({error: "error while creating user"});
                    } else {
                        res.send("success");
                    }
                })
            }
        })

    })
    app.get('/api/userLogout', (req, res) => {
        req.session = null;
        console.log(req.session);
        res.end();
    });

    app.get('/api/currentUser', (req, res) => {
        res.send(req.session.user);
    })



}