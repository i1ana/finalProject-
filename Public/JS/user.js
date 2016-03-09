var mongoose = require('mongoose')

var userSchema = new moongose.Schema({
	fName: {type: string},
	lName: string,
	email: string,
	password: string, 
	stories: [storySchema],
})

module.export = mongoose.model('user', userSchema)