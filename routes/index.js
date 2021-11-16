const router = require('express').Router();
const userRoutes = require('./userRoutes');
const gameRoutes = require('./gameRoutes');

router.use('/user', userRoutes);
router.use('/games', gameRoutes);

module.exports = router