const Game = require('../models/Games')

const gameController = {
    getGames(req,res){
        Game.find()
        .then((gameData) => {
            res.json(gameData)
        })
        .catch((err) => {
            console.log(err)
            res.status(500).json(err);
        })
    },
    createGame(req,res){
        Game.create(req.body)
        .then((gameData) => {
            res.json(gameData)
        })
        .catch((err) => {
            console.log(err)
            res.status(500).json(err);
        })
    }
}

module.exports = gameController;