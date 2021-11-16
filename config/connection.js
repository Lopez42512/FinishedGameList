const mongoose = require("mongoose");
const {mongoKey} = require('../keys/keys')

// connecting to mongodb atlus
mongoose.connect(mongoKey).then(() => {
console.log("Connected to Database");
}).catch((err) => {
    console.log("Not Connected to Database ERROR! ", err);
});


module.exports = mongoose.connection;
