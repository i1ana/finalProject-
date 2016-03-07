var express = require('express')
var bodyParser = require('body-parser')
var logger = require('morgan')
var passPort = require('passport')

//Express App 
var app = express()


//Application Configuration 
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static(__dirname + '/public'))




//Routes 

app.get('/', function(req, res){
	res.sendFile('/HTML/index.html', {root: './public'})
})


//Creating Server 

var port = 3000
app.listen(port, function(){
	console.log('Server is running on' + port)
})