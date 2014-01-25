/*

############## API ##############

codepen.api.signup(user_object)
	description: to sign up a new user
	parameters: user object, which contains properties: name, email, username, password
	returns: response object

codepen.login(user_object)
	description: to login an existing user
	parameters: user object, which contains properties: username, password
	returns: response object


Reponse Objects:

{
	success: true/false,
	error: (string)
}


##users already signed up (can log in)
	('suzy', 'I@msoawesome')
	('conan', 'gingertastic')
	('jerry', '@#!$%@')

*/


$('document').ready(function() {

	codepen.objects.User = {
		name:null,
		email: null,
		username: null,
		password: null,
		is_logged_in: false
	}
	//put code here
	var NewUser = Object.create(codepen.objects.User, {
		firstname: {
			writable: true,
			enumerable: true,
			value: ''
		},
		lastname: {
			writable: true,
			enumerable: true,
			value:''
		}
	});

//hiding signup on load
$(".signup-form").hide();

$(".signup-form-btn").click(function() {
	$(".signup-form").show();
	$(".login-form").hide();
	$(".login-form-btn").removeClass("active");
	$(".signup-form-btn").addClass("active");
});

$(".login-form-btn").click(function() {
	$(".login-form").show();
	$(".signup-form").hide();
	$(".signup-form-btn").removeClass("active");
	$(".login-form-btn").addClass("active");
});

$(".btn-login").click(function() {
		var user = Object.create(NewUser);
		user.username 	= $("#login-username-field").val();
		user.password 	= $("#login-password-field").val();
		var response 	= codepen.api.login(user);
		console.log(response);
		if (response.success === true) {
			$(".login-form.form-feedback").html("You're logged in!");
			user.is_logged_in = true;
		} else {
			$(".login-form.form-feedback").html("Sorry, login didn't work");
		}
	});

$(".btn-signup").click(function() {
	var user = Object.create(NewUser);
	user.name 	= 		$("#signup-name-field").val();
	user.email 	= 		$("#signup-email-field").val();
	user.username = 	$("#signup-username-field").val();
	user.password = 	$("#signup-password-field").val();
	var response = codepen.api.signup(user);
	console.log(response);
	if (response.success == true) {
			$(".signup-form.form-feedback").html("You're signed up! Now go login.");
		} else {
			$(".signup-form.form-feedback").html(response.error);
		}
});



});










