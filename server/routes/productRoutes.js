
const mongoose = require('mongoose');
const Product = mongoose.model('product');
module.exports = (app) => {
    // returns all products in the product database
    app.get('/api/allProducts', (req, res) => {
        Product.find({}, function (err, products) {
            res.send(users);
        })
    });

    app.get('/api/getTopFiveNewProducts', (req, res) => {
        console.log("getting top five products");
        var q = Product.find({}).limit(5);
        q.exec(function (err, products) {
            res.send(products)
        })
    });

    // return 5 new product requests. Done for limit testing.
    // optimize this in the future
    app.get('/api/getTopFiveProductRequests', (req, res) => {
        console.log("getting top five product requests");
        var q = ProductRequest.find({}).limit(5);
        q.exec(function (err, products) {
            res.send(products)
        })
    });

    // clear the product mongo db 
    app.get('/api/deleteAllProducts', (req, res) => {
        console.log("deleting all");
        Product.deleteMany({}, response => {
            console.log("successfully deleted all");
            res.end();
        });
    })
    
}