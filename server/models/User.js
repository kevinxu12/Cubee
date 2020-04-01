var mongoose = require('mongoose');
var Schema = mongoose.Schema; 

var userSchema = new Schema({
    firstname: String, 
    lastname: String, 
    email: String,
    password: String,
    confirmed: {
        type: Boolean, 
        default: false
    }
})

mongoose.model('User', userSchema);