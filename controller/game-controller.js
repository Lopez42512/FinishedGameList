const Game = require('../models/Games')
const got = require('got');

// controller is used to assemble all the functions for the database to use
const gameController = {
    
    getGames(req,res){
        // get all the games in the database
        Game.find()
        .then((gameData) => {
            res.json(gameData)
        })
        .catch((err) => {
            console.log(err)
            res.status(500).json(err);
        })
    },
    // add a game to the database
    async createGame(req,res){
        const {name} = req.body;
        // gets images from api to match with game, add an await to wait for image to return before continuing function
        const gameImage = await getImages(name);
        // add game image to req.body object to create game 
        req.body.image = gameImage;
        Game.create(req.body)
        .then(() => {
            res.redirect('http://localhost:3000/')
        })
        .catch((err) => {
            console.log(err)
            res.status(500).json(err);
        })
    },
    deleteGame(req, res){
        // get the id of the game to get ready to delete from db
        const {id} = req.params
        // delete game from db
        Game.deleteOne({_id: id})
        .then((data) => {
            console.log(data)
            res.json("I deleted the game")
        })
        
    }
    
}

async function getImages(game) {
    // replace all empty spaces with - because api doesn't allow empty space
    const gameSearch = game.replace(/\s/g, '-')
    // link for api call
    const rawg = `https://api.rawg.io/api/games/${gameSearch}?key=`
    // api request
    let response = await got.get(rawg, {responseType: 'json'});
    // get the response from api call
    let myBlob = await response;
    // return the img link
    return(myBlob.body.background_image);
}

module.exports = gameController;