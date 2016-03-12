var mongoose = require('mongoose')

//Mongoose Connect 
mongoose.connect('mongodb://localhost/storyapp')

var userSchema = mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
})

var User = mongoose.model('user', userSchema)

var storySchema = new mongoose.Schema({
	title: {type: String, required: true},
	body: {type: String, required: true},
	created: {type: Date, required: true},
	author: {type: String, required: true},
})

var Story = mongoose.model('story', storySchema)

module.exports = { 
	User: User,
	Story: Story,
}