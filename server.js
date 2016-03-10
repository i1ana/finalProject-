var express = require('express')
var bodyParser = require('body-parser')
var logger = require('morgan')
var passPort = require('passport')
var mongoose = require('mongoose')
var user = require('./Public/JS/user.js')
var story = require('./Public/JS/story.js')


//Express App 
var app = express()

//Mongoose Connect 
mongoose.connect('mongodb://localhost/storyapp')

//Application Configuration 
app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static(__dirname + '/Public'))


//Routes 

app.get('/', function(req, res){
	console.log('Got my turtle shell')
	res.sendFile('shell.html', {root: './Public/HTML'})
})



app.post('/api/stories', function(req, res){
	console.log('Testing')
	var newUser = new user({
		name: req.body.name,
		email: req.body.email
	})

	var newStory = new story({
		title: req.body.story.title,
		body: req.body.story.story,
		author: req.body.name

	})

	newUser.save(function(saveErr, user){
		newStory.save(function(saveErr, story){
			res.send({story : story, user: user})

		})

	})


})




//Creating Server and Listening

var port = 3000
app.listen(port, function(){
	console.log('The server is running away on ' + port)
})