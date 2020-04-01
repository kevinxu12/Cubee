const express = require('express');
const cookieSession = require('cookie-session');
const bodyParser = require('body-parser');
var mongoose = require('mongoose');
var keys = require('./config/keys');

// anytime you make a new model, update this
require('./models/Product');
require('./models/User');
require('./models/ProductRequest');
require('./models/Company');

mongoose.connect(keys.mongoURI);
mongoose.connection.on('connected', function(){
    console.log("connected to the mongodb atlas instance");
});
const app = express();
app.use(bodyParser.json());
// not done yet
app.use(
    cookieSession({
        maxAge: 30 * 24 * 60 * 60 * 1000,
        keys: ['key']
    })
);

require('./routes/userAuthroutes')(app);
require('./routes/productRoutes')(app);
require('./routes/emailRoutes')(app);
require('./routes/companyAuthroutes')(app);
require('./routes/requestRoutes')(app);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log("Listening on port 5000");
});