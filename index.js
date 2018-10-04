var express  = require('express');
var app      = express();
var httpProxy = require('http-proxy');
var apiProxy = httpProxy.createProxyServer();
var serverOne = 'http://localhost:3001',
    ServerTwo = 'http://localhost:3002',
    ServerThree = 'http://localhost:3003',
    ServerFour = 'http://localhost:3000',
    ServerFive = 'http://localhost:3005';
 
app.all("/search/*", function(req, res) {
    console.log('redirecting to Search - Server1');
    apiProxy.web(req, res, {target: serverOne});
});
app.all("/textbook/*", function(req, res) {
    console.log('redirecting to Textbook - Server2');
    apiProxy.web(req, res, {target: ServerTwo});
});
app.all("/solution/*", function(req, res) {
    console.log('redirecting to Solution - Server3');
    apiProxy.web(req, res, {target: ServerThree});
});
app.all("/user/*", function(req, res) {
    console.log('redirecting to user - Server4');
    apiProxy.web(req, res, {target: ServerFour});
});
app.all("/oauth/*", function(req, res) {
    console.log('redirecting to oauth - Server5');
    apiProxy.web(req, res, {target: ServerFive});
});
app.listen(3004);