//Get the Faker Pckg from Github, creates Fake Data.
//https://github.com/marak/Faker.js/
var faker = require('faker')

//Create a function to Generate Employee Information
function generateEmployees(){
	//Hold Employees in an Array
	var employees = []

	//Loop over 20 Employee ID's. (It'll start at 0.)
	for (var id=0; id<20; id++)
	{
		//Get Information from the Faker import. Make sure you pull the information
		//from the different faker categories. First name and Last name pulled from
		//the name category while email is pulled from the internet category.
		var firstName = faker.name.firstName();
		var lastName = faker.name.lastName();
		var email = faker.internet.email();
		var phone = faker.phone.phoneNumber();
		var job = faker.name.jobTitle();

		//Now push that employee information into the array.
		employees.push({
			"id":id,
			"first_name": firstName,
			"last_name": lastName,
			"job_title": job,
			"phone_number": phone,
			"email_address": email
		})
	}
	//Return the employee array.
	return {"employees":employees}
}
//Call the function outside.
module.exports = generateEmployees