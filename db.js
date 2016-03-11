var mongoose = require('mongoose')

//Mongoose Connect 
mongoose.connect('mongodb://localhost/storyapp')

var userSchema = mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
});
var User = mongoose.model('user', userSchema);