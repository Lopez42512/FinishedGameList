const mongoose = require('mongoose')
// Create the models to be used in the database
const gameSchema = new mongoose.Schema({
    name: {type: String, required: true},
    system: {type: String, required: true},
    rating: {type: Number, required: true},
    image: {type: String, require: false}
})

module.exports = mongoose.model('Game', gameSchema)