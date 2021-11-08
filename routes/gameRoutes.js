const router = require('express').Router();
const {getGames, createGame} = require("../controller/game-controller")

router.route('/').get(getGames).post(createGame)

module.exports = router