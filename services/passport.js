const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');

const User = mongoose.model('users');

passport.serializeUser((user, done) => {
    done(null, user.id); //get the user id from mongo db
});

passport.deserializeUser((id, done) => {
    User.findById(id)
        .then(user => {
            done(null, user);
        });
});

passport.use(new GoogleStrategy(
    {
        clientID: keys.googleClientID,
        clientSecret: keys.googleClientSecret,
        callbackURL: '/auth/google/callback' //the route the user is redirected to when they give permission
    }, (accessToken, refreshToken, profile, done) => {
        User.findOne({ googleID: profile.id })  // NOTE: function is async
            .then((exisitingUser) => {
                if (exisitingUser) {
                    // user already in DB
                    //console.log("Already exists");
                    done(null, exisitingUser);
                } else {
                    // new user, add them to the DB
                    //console.log("New user");
                    new User ({ googleID: profile.id })
                        .save()
                        .then(user => done(null, user));
                }
            });
    }
));