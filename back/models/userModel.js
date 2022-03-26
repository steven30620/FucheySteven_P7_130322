class User {
	constructor(user) {
		this.email = user.email;
		this.pass = user.password;
		this.lastname = user.lastName;
		this.firstname = user.firstName;
	}
}

module.exports = User;
