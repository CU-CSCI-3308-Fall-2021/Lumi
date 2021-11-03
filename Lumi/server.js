var express = require('express'); //Ensure our express framework has been added
var app = express();
var bodyParser = require('body-parser'); //Ensure our body-parser tool has been added
app.use(bodyParser.json());              // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodiesv

var pgp = require('pg-promise')();

const dbConfig = {
	host: 'db',
	port: 5432,
	database: 'user_db',
	user: 'postgres',
	password: 'pwd'
};

var db = pgp(dbConfig);

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/'));

// The renderring part for navbar
app.get('/', function(req,res){
	res.render('pages/home',{
		my_title: "Home"
	});
});

app.get('/about', function(req,res){
	res.render('pages/about',{
		my_title: "About"
	});
});

app.get('/profile', function(req,res){
	res.render('pages/profile',{
		my_title: "Profile"
	});
});

app.get('/registration', function(req,res){
	res.render('pages/registration',{
		my_title: "Profile"
	});
});

// SQL Commands go here now


app.listen(3000);
console.log('3000 is the magic port');
