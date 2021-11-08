var express = require('express'); //Ensure our express framework has been added
var app = express();
var bodyParser = require('body-parser'); //Ensure our body-parser tool has been added
app.use(bodyParser.json());              // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

//Create Database Connection
var pgp = require('pg-promise')();

/**********************
  Database Connection information
  host: This defines the ip address of the server hosting our database.
		We'll be using `db` as this is the name of the postgres container in our
		docker-compose.yml file. Docker will translate this into the actual ip of the
		container for us (i.e. can't be access via the Internet).
  port: This defines what port we can expect to communicate to our database.  We'll use 5432 to talk with PostgreSQL
  database: This is the name of our specific database.  From our previous lab,
		we created the football_db database, which holds our football data tables
  user: This should be left as postgres, the default user account created when PostgreSQL was installed
  password: This the password for accessing the database. We set this in the
		docker-compose.yml for now, usually that'd be in a seperate file so you're not pushing your credentials to GitHub :).
**********************/
const dbConfig = {
	host: 'db',
	port: 5432,
	database: 'lumiApp_db',
	user: 'postgres',
	password: 'pwd'
};

var db = pgp(dbConfig);

// set the view engine to ejs
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/'));

// home page
app.get('/', function(req, res) {
	res.render('pages/home',{
		my_title:"Home Page"
	});
});

// about page
app.get('/about', function(req, res) {
	res.render('pages/about',{
		my_title:"About Page"
	});
});

// map page
app.get('/maptest', function(req, res) {
	res.render('pages/maptest',{
		my_title:"Maptest Page"
	});
});

// profile page
app.get('/profile', function(req, res) {
	res.render('pages/profile',{
		my_title:"Profile Page"
	});
});

// registration page
app.get('/registration', function(req, res) {
	res.render('pages/registration',{
		my_title:"Profile Page"
	});
});

//login registration

//login sign up
app.post('/registration/signup', function(req, res) {
	var firstName = req.body.firstName;
	var lastName = req.body.lastName;
	var password = req.body.pwd;
	res.render('pages/survey',{
		my_title:"Login Page"
	});
});

// Survey page
app.get('/survey', function(req, res) {
	res.render('pages/survey',{
		my_title:"Survey Page"
	});
});


app.listen(3000);
console.log('3000 is the magic port');
