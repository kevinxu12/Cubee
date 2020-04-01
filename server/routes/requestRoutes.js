const mongoose = require('mongoose');
const ProductRequest = mongoose.model('productRequest');
const Product = mongoose.model('product');
module.exports = (app) => {
    // clear the product request mongo db
    app.get('/api/deleteAllProductRequests', (req, res) => {
        console.log("deleting all");
        ProductRequest.deleteMany({}, response => {
            console.log("successfully deleted all");
            res.end();
        });
    })

    app.post('/api/rejectProductRequest', (req, res) => {
        ProductRequest.findOneAndDelete({
            _id: req.body.id
        }, (err, response) => {
            if (err) {
                console.log(err);
                res.end();
            } else {
                console.log("Successfully rejected " + req.body.id)
                res.send(response);
            }
        }
        )
    });

    app.post('/api/acceptProductRequest', (req, res) => {
        ProductRequest.findOneAndDelete({
            _id: req.body.id
        }, (err, response) => {
            if (err) {
                console.log(err);
                res.end();
            } else {
                console.log(response);
                if (response) {
                    console.log("removed " + req.body.id + " from requests db")
                    var newProduct = new Product({
                        name: req.body.name,
                        discountName: req.body.discountName,
                        attributes: req.body.attributes
                    })

                    newProduct.save(function (err) {
                        if (err) {
                            console.log(err);
                        } else {
                            console.log("successfully created product by name " + req.body.name)
                            res.send(newProduct);
                        }
                    })
                } else {
                    console.log("couldn't find request");
                    res.end();
                }
            }
        })
    });


    // create new product request and add it into the mongo db
    app.post('/api/createNewProductRequest', (req, res) => {
        console.log("creating new product request for " + req.body.name);
        var newProductRequest = new ProductRequest({
            name: req.body.name,
            discountName: req.body.discountName,
            attributes: req.body.attributes
        })

        Product.findOne({
            name: req.body.name
        }, (err, response) => {
            if (err) {
                console.log({ error: "random error" });
            } else {
                if (response) {
                    res.send({
                        error: "product with name already accepts. Please change your name"
                    })
                } else {
                    newProductRequest.save(function (err) {
                        if (err) {
                            res.send({ error: "error saving unique product request" });
                        }
                        // change this to deal with error handling
                        res.send("success");

                    })
                }
            }

        });
    })
}