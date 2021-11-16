const router = require('express').Router();
const {getGames, createGame, deleteGame} = require("../controller/game-controller")

router.route('/:user_id').get(getGames).post(createGame)
router.route('/:user_id/:id').delete(deleteGame)

module.exports = router