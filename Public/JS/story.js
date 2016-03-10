var mongoose = require('mongoose')

var storySchema = new mongoose.Schema({
	title: String,
	body: String,
	created: Date,
	author: String
})

module.exports = mongoose.model('story', storySchema)

// var Story = require('././.story.js')
// Story.update