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

app.get('/api/me', app.isAuthenticatedAjax, function(req, res){
    res.send({user:req.user})
})

// app.get('/storySubmit', app.isAuthenticatedAjax, function(req, res){
// 	res.send({user:req.user})
// })

//STORIES 

//Reading a story
app.get('/api/stories/:id', function(req, res){
	console.log('Reading a story')
	console.log(db.Story.findOne({_id: req.params.id}, '', function(err, story){
		console.log(story, err)
	res.send(story)
	}))
})

//Reading all stories
app.get('/api/stories', function(req, res){
	console.log('Reading all stories')
	console.log(db.Story.find({}, '', function(err, stories){
		console.log(stories, err)
	res.send({stories: stories})
	}))

})

//Creating a story 
app.post('/api/stories', app.isAuthenticatedAjax, function(req, res){
	console.log('Creating a story')
	console.log(req.body)
	 var newStory = new db.Story({
            title: req.body.title,
            body: req.body.body,
            created: new Date(),
            author: req.body.author,
        })
        newStory.save(function(saveErr, user){
            if ( saveErr ) { res.send({ err:saveErr }) 
         	} else {
         		res.send({success: 'success'})
         	}
        }) 	
     })

//Updating a story
app.post('/api/stories/:id', app.isAuthenticatedAjax, function(req, res){
	console.log('Updating a story')
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
    bcrypt.genSalt(7, function(error, salt){
        bcrypt.hash(req.body.password, salt, function(hashError, hash){
            var newUser = new db.User({
                username: req.body.username,
                email: req.body.email,
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

//SEARCH
app.post('/search', function(req, res){
    var query = req.body.searchTerm
    var searchQ = new RegExp(query + '+', 'i')

    db.Story.find({
        $or:[
            {body: {$regex: searchQ}},
            {title:{$regex: searchQ}},
            {author: {$regex: searchQ}}
        ]
    }, function(err, stories){
        res.send(stories)
    })
})

//Creating Server and Listening
//We need to configure local and production ports 
var port = 3000
app.listen(port, function(){
	console.log('The server is running away on ' + port)
})