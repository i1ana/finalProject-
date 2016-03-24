//Schemas 

var mongoose = require('mongoose')

//Mongoose Connect 
mongoose.connect('mongodb://localhost/storyapp')

var userSchema =  mongoose.Schema({
    username: { type: String, required: true, unique: true},
    email: 	  {	type: String, required: true, unique: true},
    password: { type: String, required: true },
    stories:  [{ type: mongoose.Schema.ObjectId, ref: "story"}]
})

var User = mongoose.model('user', userSchema)

var storySchema = new mongoose.Schema({
	title: {type: String, required: true},
	body:  {type: String, required: true},
	created: {type: Date, required: true},
	author: {type: String, required: true},
	likes: {type: Number, default: 0},
	user: { type: mongoose.Schema.ObjectId, ref: "user"}
})

var Story = mongoose.model('story', storySchema)

module.exports = { 
	User: User,
	Story: Story,
}