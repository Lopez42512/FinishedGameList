const router = require('express').Router();
const {getGames, createGame, deleteGame} = require("../controller/game-controller")

router.route('/').get(getGames).post(createGame)
router.route('/:id').delete(deleteGame)

module.exports = router