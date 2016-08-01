var apiai = require('apiai');
 
var app = apiai("0e4796e817554c2d9f1319dd89397282");
 
var request = app.textRequest('Hello');
 
request.on('response', function(response) {
    console.log(response);
});
 
request.on('error', function(error) {
    console.log(error);
});
 
request.end()