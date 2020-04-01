const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var productRequestSchema = new Schema({
    name: String, 
    discoutName: String, 
    type: {
        type: String, 
        enum: ['SOFTWARE', 'HARDWARE'],
        default: 'SOFTWARE'
    }, 
    attributes: [String]
})

mongoose.model('productRequest', productRequestSchema);