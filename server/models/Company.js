var mongoose = require('mongoose');
var Schema = mongoose.Schema; 

var companySchema = new Schema({
    name: String, 
    email: String,
    password: String
})

mongoose.model('Company', companySchema);