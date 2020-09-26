const express = require('express'); 
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys');
const bodyParse = require('body-parser');

require('./models/user'); 
require('./services/passport'); 
const app = express(); 

app.use(bodyParse.json());
// set up cookies
app.use(
    cookieSession({ 
        maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
        keys: [keys.cookieKey]
    })
);
app.use(passport.initialize());
app.use(passport.session());


mongoose.connect(keys.mongoURI); 

require('./routes/authRoutes')(app); 
require('./routes/billingRoutes')(app);

const PORT = process.env.PORT || 5000; 
app.listen(PORT);