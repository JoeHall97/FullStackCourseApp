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

if(process.env.NODE_ENV === 'production') {
    // Express will server up production assest, e.g. out main.js file
    app.use(express.static('client/build'));

    // Express will server up index.html if it doesn't recognise the route
    const path = require('path');
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

const PORT = process.env.PORT || 5000; 
app.listen(PORT);