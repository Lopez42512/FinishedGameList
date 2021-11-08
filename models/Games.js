const mongoose = require('mongoose')

const gameSchema = new mongoose.Schema({
    name: {type: String, required: true},
    system: {type: String, required: true},
    rating: {type: Number, required: true}
})

module.exports = mongoose.model('Game', gameSchema)