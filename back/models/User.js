class User {
	constructor(id, lastname, firstname, email, password, isAdmin) {
		this.id = id;
		this.lastname = lastname;
		this.firstname = firstname;
		this.email = email;
		this.password = password;
		this.isAdmin = isAdmin;
	}
}

exports.module = User;
