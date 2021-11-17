var express = require('express'); //Ensure our express framework has been added
var app = express();
var bodyParser = require('body-parser'); //Ensure our body-parser tool has been added
app.use(bodyParser.json());              // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

const bcrypt = require('bcrypt');
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
	if(loggedInId == 0){
		res.render('pages/registration', {
			my_title: "Registration Page"
		});
	} else {
		var userInformation = 'SELECT * FROM users WHERE id = \'' + loggedInId +'\';';
		db.task('get-everything', task => {
			return task.batch([
				task.any(userInformation)
			]);
		})
		.then(info => {
			loggedInFirstName = info[0][0].firstname; // Remembers the login user information for getting information and updates
			loggedInLastName = info[0][0].lastname; // Remembers the login user information for getting information and updates
			loggedInEmail = info[0][0].email; // Remembers the login user information for getting information and updates
			loggedInPassword = info[0][0].password; // Remembers the login user information for getting information and updates
			loggedInSnowboard = info[0][0].snowboardsize; // Remembers the login user information for getting information and updates
			loggedInShoe = info[0][0].shoesize; // Remembers the login user information for getting information and updates
				res.render('pages/profile',{
					my_title: "Profile Page",
					data: info[0]
				});
		})
		.catch(err => {
				console.log('error', err);
				res.render('pages/home', {
					my_title: 'Home Page',
					data:''
				})
		});
	}
});

// login route
// Global Variables for a logged in person
var loggedInId = 0;
var loggedInFirstName;
var loggedInLastName;
var loggedInEmail;
var loggedInPassword;
var loggedInHeight;
var loggedInWeight;
app.get('/registration/login', function (req, res){

	const email = req.query.inputEmail;
	var userPassword
	var userPasswordQuery = 'SELECT password FROM users WHERE email = \'' + email +'\';';
	db.task('get-password', task => {
		return task.batch([
			task.any(userPasswordQuery)
		]);
	})
	.then(pass => {
		if(pass[0] == ''){
			res.render('pages/registration', {
				my_title: "Registration Page"
			});
		}
		else{

			userPassword = pass[0][0].password;

			if (bcrypt.compareSync(req.query.inputPassword, userPassword)) {
				console.log('success');

				var userInformation = 'SELECT * FROM users WHERE email = \'' + email +'\';';
				var getIDNumber = 'SELECT id, firstName FROM users WHERE email = \'' + email +'\';'; // Query to check if email and password are matching
				db.task('get-everything', task => {
					return task.batch([
						task.any(userInformation),
						task.any(getIDNumber)
					]);
				})
				.then(info => {
					if(info[0] == ""){
						res.render('pages/registration', {
							my_title: "Registration Page"
						});
					} else {
						loggedInId = info[1][0].id; // Remembers the login user information for getting information and updates
						loggedInFirstName = info[0][0].firstname; // Remembers the login user information for getting information and updates
						loggedInLastName = info[0][0].lastname; // Remembers the login user information for getting information and updates
						loggedInEmail = info[0][0].email; // Remembers the login user information for getting information and updates
						loggedInPassword = info[0][0].password; // Remembers the login user information for getting information and updates
						loggedInSnowboard = info[0][0].snowboardsize; // Remembers the login user information for getting information and updates
						loggedInShoe = info[0][0].shoesize; // Remembers the login user information for getting information and updates
						res.redirect('/profile');
					};
				})
				.catch(err => {
						console.log('error', err);
						res.redirect('/home');
				});
			}
			else {
				console.log('Incorrect Password');
				res.redirect('/registration');
			}

		};
	})
});


// registration page
app.get('/registration', function(req, res){
	res.render('pages/registration',{
		my_title:"Registration Page"
	});
})

// Change profile route
app.post('/profile/updated', function(req, res) {
	var firstName = req.body.firstName;
	var lastName = req.body.lastName;
	var email = req.body.email;
	var password = req.body.password;
	var shoesize = req.body.shoesize;
	var snowboardsize = req.body.snowboardsize;
	var stringInsert = "";

	// This function as an insert statement creator according to the data that will be edited
	if(firstName == "") {
		firstName = loggedInFirstName;
	};
	if (lastName == "") {
		lastName = loggedInLastName;
	}; 
	if (email == "") {
		email = loggedInEmail;
	};
	if (password == "") {
		password = loggedInPassword;
	};
	if (snowboardsize == "") {
		snowboardsize = loggedInSnowboard;
	};
	if (shoesize == "") {
		shoesize = loggedInShoe;
	};

	console.log("loggedInFirstName = " + loggedInFirstName);

	var insert_statement = 'UPDATE users SET firstName =  \'' + firstName + '\', lastName =  \'' + lastName + '\', email =  \'' + email + '\', password =  \'' + password + '\', shoesize =  \'' + shoesize + '\',  snowboardsize =  \'' + snowboardsize + '\' WHERE id = \'' + loggedInId +'\';';
	var userInformation = 'SELECT * FROM users WHERE id = \'' + loggedInId +'\';';
	db.task('get-everything', task => {
        return task.batch([
            task.any(userInformation),
            task.any(insert_statement)
        ]);
    })

	.then(info => {
		// Update after changes are made into the table
		res.redirect('/profile');
    })

    .catch(err => {
        console.log('error', err);
        res.redirect('/')
    });
});
app.get('/error', function(req, res) {
	res.render('pages/error',{
		my_title:"Error"
	});
});

//sign up route
// Still having problems here since global variable doesn't want to update every time I access inside a function
var idTest = 0;
app.post('/registration/signup', async (req, res) => {
	
	try {
		const salt = await bcrypt.genSalt(10);
		const hashedPassword = await bcrypt.hash(req.body.password, salt);

		var firstName = req.body.firstName;
		var lastName = req.body.lastName;
		var email = req.body.email;
		var insert_statement = 'INSERT INTO users (firstName, lastName, email, password) VALUES (\'' + firstName + '\', \'' + lastName + '\', \'' + email + '\', \'' + hashedPassword + '\');'; // Insert into table
		var getIDNumber = 'Select id from users where firstName = \'' + firstName +'\';';

		db.task('get-everything', task => {
			return task.batch([
				task.any(insert_statement),
				task.any(getIDNumber)
			]);
		})

		// This is weird since it only changes the value of a number inside the info function but doesn't affect the outside function
		.then(info => {
			idTest = info[1][0].id;
			console.log("idTest = " + idTest);
			// console.log(info[1][0].id);
			res.render('pages/survey',{
					my_title: "Home Page" 
				})
		})
		.catch(err => {
				console.log('error', err);
				res.render('pages/home', {
					my_title: 'Home Page'
				})
		});
	}

	
	
	catch {
		res.status(500).send()
	}

});
// console.log("idTest outside of route " + idTest);


// Survey route
app.post('/', function(req, res) {
	var years = req.body.yearsSkied;
	var days = req.body.daysSeason;
	var height = req.body.inputHeight;
	var shoesize = req.body.inputShoe;
	var boardsize = height * 2;
	var level = 0;
	var skier = req.body.isSkier;
	var snowboarder = req.body.isSnowboarder;
	if(skier == 1){
		snowboarder = 0;
	}
	else{
		skier = 0;
	}

	if(years < 3){
		level = 1;
	} else if (years >= 3 && years < 10){
		level = 2;
	} else if(years >= 10){
		level = 3;
	}

	console.log("skier value = " + skier);
	console.log("snowboarder value = " + snowboarder);

	
	var weight = req.body.inputWeight;
	var insert_statement = 'UPDATE users SET level = \''+ level +'\', snowboardsize = \''+ boardsize +'\', shoesize = \''+ shoesize +'\', skier = \''+ skier +'\', snowboarder= \''+ snowboarder +'\' WHERE id = \''+ idTest +'\';';

	db.task('get-everything', task => {
        return task.batch([
            task.any(insert_statement)
        ]);
    })
	.then(info => {
    	res.render('pages/finish',{
				my_title: "Welcome" 
			})
    })
	.catch(err => {
		console.log('error', err);
		res.render('pages/error', {
			my_title: 'Error'
		})
	});
});

app.get('/survey', function(req, res) {
	res.render('pages/survey',{
		my_title:"Survey Page"
	});
});

app.listen(3000);
console.log('3000 is the magic port');
