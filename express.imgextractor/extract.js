var express = require('express');

var app = express();

app.set('port', process.env.PORT || 4000);

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	res.send('welcome to image extract');
});

app.listen(app.get('port'), function(){
  console.log( 'Express started on http://localhost:' + 
    app.get('port') + '; press Ctrl-C to terminate.' );
});
