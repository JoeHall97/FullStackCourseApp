# Emaily, a website for sending user surveys

A website built with NodeJs and ReactJS that allows for surveys to be created, emailed out, and the responses collected. This was built as part of a [Udemy course](https://www.udemy.com/course/node-with-react-fullstack-web-development/)

## Set up

This website makes use of google o-auth, mongoDB, stripe, and sendgrid. You'll need an account for each of these, and a mongo database set up.

After pulling the code down from git and install the required node modules, you'll first need to add in the api keys for the backend. You'll need api keys for google o-auth, stripe, and sendgrid. A mongoURI is also needed and a cookie key (any random string of text should be fine). If you're running on a local dev environemt, then these keys should also be added to a `dev.js` file in `/config`. If you're on a production environment, then these should just be added as environment variables. Also you'll need to add the stripe key to the front end, which can be done by setting an environment variable: `REACT_APP_STRIPE_KEY=<key>`, or adding the key to `.env.local` in the `/client` directory.

Next, you'll need to set up webhooks with sendgrid. For a production environment, you should just need to point any click event to `<site-url>/api/webhooks`. For a developement environment, you'll need to use something like [localtunnel](https://theboroer.github.io/localtunnel-www/) or [ngrok](https://ngrok.com/) to the webhook calls to your local environment.

After all of this, run `npm run dev` to start the front end and back end.
