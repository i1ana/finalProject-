var db = require('./db.js')

var passport = require('passport')
var LocalStrategy = require('passport-local').Strategy;


passport.serializeUser(function(user, done) {
    done(null, user.id);
});
passport.deserializeUser(function(id, done) {
    db.User.findById(id, function(err, user) {
        done(err, user);
    });
});

//Varifying who is who 


var bcrypt = require('bcryptjs')
passport.use(new LocalStrategy(
    function(username, password, done) {
        db.User.findOne({ username: username }, function (err, user) {
            if (err) { return done(err); }
            if (!user) {
                return done(null, false);
            }
            // If we got this far, then we know that the user exists. But did they put in the right password?
            bcrypt.compare(password, user.password, function(error, response){
                if (response === true){
                    return done(null,user)
                }
                else {
                    return done(null, false)
                }
            })
        });
    }
));



// app.isSteveAuthenticated = function(req, res, next){
//     // If the current user is logged in...
//     if(req.isAuthenticated() && req.user.permissions.admin === true){
//     // Middleware allows the execution chain to continue.
//         return next();
//     }
//     // If not, redirect to login
//     res.redirect('/');
// }