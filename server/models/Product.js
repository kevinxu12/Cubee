var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var productSchema = new Schema({
    name: String, 
    discoutName: {
        type: String, 
        default: 'NONE'
    }, 
    type: {
        type: String, 
        enum: ['SOFTWARE', 'HARDWARE'],
        default: 'SOFTWARE'
    }, 
    attributes: [String]
})

mongoose.model('product', productSchema);