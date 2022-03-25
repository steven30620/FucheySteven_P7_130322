const jwt = require('jsonwebtoken'); // Permet l'authentification de chaque requête
require('dotenv').config();

module.exports = (req, res, next) => {
	try {
		//permet de gérer toute les erreur du block authentification
		const token = req.headers.authorization.split(' ')[1]; // on récupère le token dans le header,le tableau nous retourne deux éléments, on choisis donc le 2e élement qu'es le token
		jwt.verify(
			//utilise jwt, la fonction vérify le token, premier argument est le token, et le deuxième argument est la clée secrète
			token,
			process.env.SECRET_KEY,
			function (err, payload) {
				if (err) {
					return res.sendStatus(403);
				}

				req.userId = payload.userId;
				req.isAdmin = payload.isAdmin;

				next();
			}
		);
	} catch {
		console.log('invalid request auth');
		res.status(401).json({
			error: new Error('Invalid request!'),
		});
	}
};
