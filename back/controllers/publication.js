const fs = require('fs');
const connection = require('../middleware/connection');

exports.createPost = (req, res, next) => {
	const postTitle = req.body.postTitle;
	const postContent = req.body.postContent;
	const postImage =
		'http://localhost:3000/' + req.file.path.replace('\\', '/');
	const userId = req.userId;

	connection.execute(
		'INSERT INTO `post` (title ,content ,image , userId) VALUES (?,?,?,?)',
		[postTitle, postContent, postImage, userId],
		function (err, result, fields) {
			if (err) {
				return res.status(500).json({ error: err });
			}
			return res.status(200).json({ message: 'post bien créé !' });
		}
	);
};

exports.deletePost = (req, res, next) => {
	const postId = req.params.id;
	const userId = req.userId;
	const isAdmin = req.isAdmin;

	connection.execute(
		'SELECT `userId` FROM `post` WHERE `id` = ?',
		[postId],
		function (err, result, fields) {
			if (err) {
				return res
					.status(500)
					.json({ message: 'Impossible de supprimer le post!' });
			}
			const resultId = result[0];

			if (resultId.userId == userId || isAdmin === true) {
				connection.execute(
					'DELETE FROM `post` WHERE `post`.`id` = ?',
					[postId],
					function (err, result, fields) {
						if (err) {
							console.log('coucou');
							return res.status(500).json({ error: err });
						}
						return res
							.status(200)
							.json({ message: 'post bien supprimé !' });
					}
				);
			}
			if (err) {
				return res.status(500).json({ error: err });
			}
		}
	);
};

exports.deleteComment = (req, res, next) => {
	const commentId = req.params.id;
	const userId = req.userId;

	connection.execute(
		'SELECT `userId` FROM `comment` WHERE `id` = ?',
		[commentId],
		function (err, result, fields) {
			if (err) {
				return res
					.status(500)
					.json({ message: 'Impossible de supprimer le post!' });
			}
			const resultId = result[0];

			if (resultId.userId == userId || isAdmin === true) {
				connection.execute(
					'DELETE FROM `comment` WHERE `comment`.`id` = ?',
					[commentId],
					function (err, result, fields) {
						if (err) {
							return res.status(500).json({ error: err });
						}

						return res
							.status(200)
							.json({ message: 'Commentaire bien supprimé !' });
					}
				);
			}
			if (err) {
				return res.status(500).json({ error: err });
			}
		}
	);
};

exports.getAllPosts = (req, res, next) => {
	connection.execute(
		'SELECT post.*, post.id as postId, user.* FROM `post` JOIN user ON post.userId = user.id',
		[],
		function (err, result, fields) {
			if (err) {
				return res.status(500).json({ error: err });
			}
			return res
				.status(200)
				.json({ message: 'post bien récupéré !', posts: result });
		}
	);
};

exports.createComment = (req, res, next) => {
	const commentContent = req.body.commentContent;
	const postId = req.body.postId;
	const userId = req.userId;

	connection.execute(
		'INSERT INTO `comment` (content, userId, postId) VALUES (?,?,?)',
		[commentContent, userId, postId],
		function (err, result, fields) {
			if (err) {
				return res.status(500).json({ error: err });
			}
			return res.status(200).json({ message: 'commentaire bien créé !' });
		}
	);
};

exports.getComment = (req, res, next) => {
	const postId = req.params.postId;

	connection.execute(
		'SELECT user.*, post.*, comment.*, comment.content as commentContent FROM `comment` JOIN user ON comment.userId = user.id JOIN post ON post.id = comment.postId WHERE comment.postId = ?',
		[postId],
		function (err, result, fields) {
			if (err) {
				console.log(err);
				return res.status(500).json({ error: err });
			}
			return res.status(200).json({
				message: 'comments bien récupéré !',
				comments: result,
			});
		}
	);
};
