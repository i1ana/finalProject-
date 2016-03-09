var mongoose = require('mongoose')

var storySchema = new mongoose.Schema({
	title: {type: string},
	body: string,
	created: {type: date},
	author: {type: mongoose.Schema.ObjectId, ref: 'user'}
})

module.exports = mongoose.model('story', storySchema)

// var Story = require('././.story.js')
// Story.update