const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const mongoose = require("mongoose");
const keys = require("../config/keys");

const User = mongoose.model("users");

passport.serializeUser((user, done) => {
	done(null, user.id); //get the user id from mongo db
});

passport.deserializeUser((id, done) => {
	User.findById(id).then((user) => {
		done(null, user);
	});
});

passport.use(
	new GoogleStrategy(
		{
			clientID: keys.googleClientID,
			clientSecret: keys.googleClientSecret,
			callbackURL: "/auth/google/callback",
			proxy: true, // stops GoogleStrategy from disabling https, which breaks google oauth callback
		},
		async (accessToken, refreshToken, profile, done) => {
			//async/await solution for  versions >= ES2017
			const exisitingUser = await User.findOne({ googleID: profile.id });
			if (exisitingUser) {
				// user already in DB
				return done(null, exisitingUser);
			}
			// new user, add them to the DB
			const user = await new User({ googleID: profile.id }).save();
			done(null, user);
		}
		/*(accessToken, refreshToken, profile, done) => { //promise solution for  versions < ES2017
        User.findOne({ googleID: profile.id })  
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
    }*/
	)
);
