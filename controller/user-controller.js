const { where } = require("../models/User");
const User = require("../models/User");

const userController = {
    createUser(req,res){    
        console.log(req.body);
        User.create(req.body)
        .then(() => {
            console.log('user created')
            res.json('user created')
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err)
        })
    },
    getUser(req,res){
        const {username, password} = req.body;
        User.findOne({username:username, password:password})
        .then((response) => {
            console.log(response)
            res.json(response)
        })
        .catch(err => {
            console.log(err)
        })
    }
}

module.exports = userController;