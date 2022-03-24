const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const connection = require("../middleware/connection");
const MaskData = require("maskdata");
//maskdata is a Node.js module to mask various kinds of data. With the help of maskdata, you can mask email, phone number, card number, JSON fields, password etc..
const emailMaskOptions = {
	maskWith: "*",
	unmaskedStartCharactersBeforeAt: 1,
	unmaskedEndCharactersAfterAt: 2,
	maskAtTheRate: false,
};

exports.login = (req, res, next) => {
	connection.execute(
		"SELECT * FROM `user` WHERE `email` = ?",
		[MaskData.maskEmail2(req.body.email, emailMaskOptions)],
		function (err, results, fields) {
			if (err) {
				return res.status(500).json({ error: err });
			}

			if (results.length == 0) {
				return res
					.status(401)
					.json({ error: "Utilisateur non trouvé !" });
			}

			bcrypt //module qui vas comparer le mot de passe hashé
				.compare(req.body.password, results[0].password)
				.then((valid) => {
					if (!valid) {
						return res
							.status(401)
							.json({ error: "Mot de passe incorrect !" });
					}

					res.status(200).json({
						user: {
							id: results[0].id,
							firstname: results[0].firstname,
							lastname: results[0].lastname,
							email: results[0].email,
							isAdmin: results[0].isAdmin,
						},
						token: jwt.sign(
							//fonction sign prend 2 argument
							{ userId: results[0].id }, // premier argument est ce que l'on veux encoder, ici c'est l'identifiant, pour être sur que la requête correspond a l'user ID
							process.env.SECRET_KEY, //le deuxième argument est la clée secret pour l'encodage,
							{ expiresIn: "24h" } // chaque token dure 24h
						),
					});
				})
				.catch((error) => res.status(500).json({ error }));
		}
	);
};

exports.signup = (req, res, next) => {
	const lastname = req.body.lastname;
	const firstname = req.body.firstname;
	const password = req.body.password;
	const email = MaskData.maskEmail2(req.body.email, emailMaskOptions);

	//rajouter une verif des donné reçue

	bcrypt // création d'un mot de passe hashé
		.hash(password, 10)
		.then((hash) => {
			connection.execute(
				"INSERT INTO `user` (lastname,firstname, email, password) VALUES (?,?,?,?)",
				[lastname, firstname, email, hash],
				function (err, result, fields) {
					if (err) {
						return res.status(500).json({ error: err });
					}

					return res
						.status(200)
						.json({ message: "Utilisateur bien créé !" });
				}
			);
		})
		.catch((error) => res.status(500).json({ error }));
};

exports.deleteUser = (req, res, next) => {
	const userId = req.params.id;

	console.log(userId);
	console.log(req.userId);

	if (req.userId != userId) {
		return res.status(401).json({
			error: "Vous ne pouvez pas supprimer un compte autre que le votre",
		});
	}

	connection.execute(
		"DELETE FROM `user` WHERE `user`.`id` = ?",
		[userId],
		function (err, result, fields) {
			if (err) {
				return res.status(500).json({ error: err });
			}
			return res.status(200).json({ message: "user bien supprimé !" });
		}
	);
};
