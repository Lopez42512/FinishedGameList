const mongoose = require("mongoose");


// connecting to mongodb atlus
mongoose.connect('').then(() => {
console.log("Connected to Database");
}).catch((err) => {
    console.log("Not Connected to Database ERROR! ", err);
});


module.exports = mongoose.connection;
