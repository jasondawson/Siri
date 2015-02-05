var http = require('http');

var messages = [
	"Hello There.",
	"I'm sorry, I cannot take any requests right now",
	"The answer is 42.",
	"Make your own sandwich.",
	"Bow down to your Apple Overlords"
];

var myMessage = function(arr) {
	return messages[Math.floor(Math.random() * arr.length)];
}

var onRequest = function(req, res) {

if (req.method === 'OPTIONS') {
	res.writeHead(200, {
		'Connection': 'close',
		'Content-Type': 'application/json',
		'Access-Control-Allow-Origin': '*',
		'Access-Control-Allow-Methods': 'OPTIONS, GET, POST',
		'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
	});
	res.end();
}



if (req.method === 'GET') {
	res.writeHead(200, {
		'Connection': 'close',
		'Content-Type': 'application/json',
		'Access-Control-Allow-Origin': '*'
	});
	
	res.end(JSON.stringify({message: myMessage(messages)}));
}

}

http.createServer(onRequest).listen(8887);
console.log('Listening on port 8887');

