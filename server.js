var express = require('express')
var bodyParser = require('body-parser')
var logger = require('morgan')
var passport = require('passport')
var bcrypt = require('bcryptjs')
var db = require('./db.js')
var passportConfig = require('./passportConfig.js')




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

app.use(passport.initialize());
app.use(passport.session());


//Application Configuration 
app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static(__dirname + '/Public'))



app.isAuthenticated = function(req, res, next){
    // If the current user is logged in...
    if(req.isAuthenticated()){
    // Middleware allows the execution chain to continue.
        return next();
    }
    // If not, redirect to login
    console.log('get outta here!')
    res.redirect('/');
}


app.isAuthenticatedAjax = function(req, res, next){
    // If the current user is logged in...
    if(req.isAuthenticated()){
    // Middleware allows the execution chain to continue.
        return next();
    }
    // If not, redirect to login
    res.send({error:'not logged in'});
}




//Routes 

app.get('/', function(req, res){
	console.log('Got my turtle shell')
	res.sendFile('shell.html', {root: './Public/HTML'})
})
console.log("on line 35", app.isAuthenticatedAjax)

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

//Creating user
app.post('api/users', app.isAuthenticatedAjax, function(req, res){
	console.log('Creating a user')
})

//update user
app.post('api/users/:id', app.isAuthenticatedAjax, function(req, res){
	console.log('Updating a user')
})

//Signup 
app.post('/signup', function(req, res){
    bcrypt.genSalt(11, function(error, salt){
        bcrypt.hash(req.body.password, salt, function(hashError, hash){
            var newUser = new db.User({
                username: req.body.username,
                password: hash,
            });
            newUser.save(function(saveErr, user){
                if ( saveErr ) { res.send({ err:saveErr }) }
                else {
                    req.login(user, function(loginErr){
                        if ( loginErr ) { res.send({ err:loginErr }) }
                        else { res.send({success: 'success'}) }
                    })
                }
            })

        })
    })
})

//Login

app.post('/login', function(req, res, next){
    passport.authenticate('local', function(err, user, info) {
        if (err) { return next(err); }
        if (!user) { return res.send({error : 'No dice grandpa'}); }
        req.logIn(user, function(err) {
            if (err) { return next(err); }
            return res.send({success:'success'});
        });
    })(req, res, next);
})



// GET request handler on server to check if someone is logged in

	app.get('/api/me', function(req, res){
	    // Return the logged in user (or undefined if they are not logged in)
	    res.send({user:req.user})
	})




//Creating Server and Listening

var port = 3000
app.listen(port, function(){
	console.log('The server is running away on ' + port)
})