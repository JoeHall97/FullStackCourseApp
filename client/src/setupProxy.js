// set up proxy to redirect between front-end and back-end (this is just for the dev env)
const { createProxyMiddleware } = require("http-proxy-middleware");
module.exports = function (app) {
    app.use(
        ["/api", "/auth/google"],
        createProxyMiddleware({
            target: "http://localhost:5000",
        })
    );
};