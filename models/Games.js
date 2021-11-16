const mongoose = require('mongoose')
// Create the models to be used in the database
const gameSchema = new mongoose.Schema({
    name: {type: String, required: true},
    system: {type: String, required: true},
    rating: {type: Number, required: true},
    image: {type: String, require: false},
    user_id: {type: String, require: true}
})

module.exports = mongoose.model('Game', gameSchema)