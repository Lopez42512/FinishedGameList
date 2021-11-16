const router = require('express').Router();
const {createUser, getUser} = require('../controller/user-controller');

router.route('/signup').post(createUser);
router.route('/login').post(getUser)

module.exports = router;