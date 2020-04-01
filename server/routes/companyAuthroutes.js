const mongoose = require('mongoose');
const Company = mongoose.model('Company');

module.exports = (app) => {
    app.post('/api/companyLogin', (req, res) => {
        var email = req.body.email
        Company.findOne({
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
                        console.log(response);
                        req.session.company = response.name;
                        res.send(response.name);
                    } else {
                        res.send({error: "wrong password"});
                    }
                }
            }
        })
    })

    app.post('/api/companySignup', (req, res) => {
        var newCompany = new Company({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        })
        console.log("company signup occccuring on backend");
        // first check if the email already exists
        Company.findOne({ email: req.body.email }, (err, response) => {
            if (err) {
                res.send({error: "error while finding company in signup"});
            }
            if (response) {
                res.send({error: "company with this name already exists"})
            } else {
                newCompany.save(function (err, response) {
                    console.log("New company" + response);
                    if (err) {
                        res.send({error: "error while creating new company"});
                    } else {
                        res.send("successful company sign up");
                    }
                })
            }
        })

    })
    app.get('/api/companyLogout', (req, res) => {
        req.session = null;
        console.log(req.session);
        res.end();
    });

    app.get('/api/currentCompany', (req, res) => {
        res.send(req.session.company);
    })

}