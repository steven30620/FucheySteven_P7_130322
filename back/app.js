const express = require('express'); //tout les module nécéssaire au fonctionement de l'api
const bodyparser = require('body-parser');
const app = express();
const multer = require('multer');
const publicationRoutes = require('./routes/publication');
const userRoutes = require('./routes/user');
const path = require('path');
require('dotenv').config();
const router = express.Router();
const limiter = require('./middleware/rateLimit');

//modèle de la requête gérant le CORS
app.use((req, res, next) => {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader(
		'Access-Control-Allow-Headers',
		'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization'
	);
	res.setHeader(
		'Access-Control-Allow-Methods',
		'GET, POST, PUT, DELETE, PATCH, OPTIONS'
	);
	next();
});

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));
app.use('/api/publication', publicationRoutes);
app.use('/api/auth', userRoutes);
app.use('/images', express.static(path.join(__dirname, 'images')));
app.use(limiter);

module.exports = app;
