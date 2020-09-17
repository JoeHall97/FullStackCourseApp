// figure out if in dev or production environment
if(process.env.NODE_ENV === 'production') {
    //production keys
    module.exports = require('./prod');
} else {
    //dev keys
    module.exports = require('./dev');
}