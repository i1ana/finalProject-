var express = require('express')
var bodyParser = require('body-parser')
var logger = require('morgan')
var user = require('./Public/JS/user.js')
var story = require('./Public/JS/story.js')


//Express App 
var app = express()

/** Express Session Setup **/
var session = require('express-session')
app.sessionMiddleware = session({
  secret: 'keyboard dog',
  resave: false,
  saveUninitialized: true,
})
app.use(app.sessionMiddleware)



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

app.get('/api/me', app.isAuthenticatedAjax, function(req, res){
    res.send({user:req.user})
})

// app.get('/storySubmit', app.isAuthenticatedAjax, function(req, res){
// 	res.send({user:req.user})
// })

//STORIES 

//Reading a story
app.get('/api/stories/:id', app.isAuthenticatedAjax, function(req, res){
	console.log('Reading a story')
})

//Reading all stories
app.get('/api/stories', app.isAuthenticatedAjax, function(req, res){
	console.log('Reading all stories')
})

//Creating a story 
app.post('/api/stories', app.isAuthenticatedAjax, function(req, res){
	console.log('Creating a story')
})

//Updating a story
app.post('/api/stories/:id', app.isAuthenticatedAjax, function(req, res){
	console.log('Updating a story')


	// var newUser = new user({
	// 	name: req.body.name,
	// 	email: req.body.email
	// })

	// var newStory = new story({
	// 	title: req.body.story.title,
	// 	body: req.body.story.story,
	// 	author: req.body.name

	// })

	// newUser.save(function(saveErr, user){
	// 	newStory.save(function(saveErr, story){
	// 		res.send({story : story, user: user})

	// 	})

	// })
})


//USERS 

//Getting single user 
app.get('/api/users/:id', app.isAuthenticatedAjax, function(req, res){
	console.log('Getting a user')
})

//Getting all users
app.get('/api/users', app.isAuthenticatedAjax, function(req, res){
	console.log('Getting all users')
})

app.post('api/users', app.isAuthenticatedAjax, function(req, res){
	console.log('Creating a user')
})

//Creating/update user
app.post('api/users/:id', app.isAuthenticatedAjax, function(req, res){
	console.log('Updating a user')
})






//Creating Server and Listening

var port = 3000
app.listen(port, function(){
	console.log('The server is running away on ' + port)
})