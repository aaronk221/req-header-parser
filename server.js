var express = require('express');

var port = process.env.PORT || 8080;

console.log('server is starting. . .');

var app = express();

app.use(express.static('website'));

app.listen(port, function(){

	console.log('server is running');

});

app.get('/whoami', whoAmI);

function whoAmI(req, res){



}