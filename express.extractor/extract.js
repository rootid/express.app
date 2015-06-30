var express = require('express');
var fortune = require('./lib/imgextract.js');

var app = express();


var handlebars = require('express3-handlebars').create({ defaultLayout:'main' });

app.engine('handlebars', handlebars.engine);

app.set('view engine', 'handlebars');

app.set('port', process.env.PORT || 4000);

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
	res.send('welcome to image extract');
});

var umyImageUrl = 'http://l.yimg.com/dh/ap/default/120910/yahoo_logo_br.png'

app.get('/imageload', function(req,res){
    res.render('imageloads', { myImageUrl : umyImageUrl } );
});

// 404 catch-all handler (middleware)
app.use(function(req, res, next){
	res.status(404);
        res.render('404');
});

// 500 error handler (middleware)
app.use(function(err, req, res, next){
	console.error(err.stack);
	res.status(500);
	res.render('500');
});

app.listen(app.get('port'), function(){
  console.log( 'Express started on http://localhost:' + 
    app.get('port') + '; press Ctrl-C to terminate.' );
});
