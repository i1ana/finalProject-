var express = require('express')
var bodyParser = require('body-parser')
var logger = require('morgan')
var passPort = require('passport')
var mongoose = require('mongoose')

//Express App 
var app = express()

//Mongoose Connect 
mongoose.connect('mongodb://localhost/storyapp')

//Application Configuration 
app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static(__dirname + '/public'))


//Routes 

app.get('/', function(req, res){
	console.log('Yo')
	res.sendFile('/HTML/shell.html', {root: './public'})
})


//Creating Server and Listening

var port = 3000
app.listen(port, function(){
	console.log('The server is running away on ' + port)
})