// production keys
module.exports = {
	googleClientID: process.env.GOOGLE_CLIENT_ID,
	googleClientSecret: process.env.GOOGLE_CLIENT_SECERT,
	mongoURI: process.env.MONGO_URI,
	cookieKey: process.env.COOKIE_KEY,
	stripePublishableKey: process.env.STRIPE_PUBLISHABLE_KEY,
	stripeSecertKey: process.env.STRIPE_SECERT_KEY,
	sendGridKey: process.env.SEND_GRID_KEY,
	redirectDomain: process.env.REDIRECT_DOMAIN,
	emailSender: process.env.EMAIL_SENDER,
};
