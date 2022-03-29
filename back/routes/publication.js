const express = require('express');
const router = express.Router();
const publicationCtrl = require('../controllers/publication');
const multer = require('../middleware/multer-config');
const auth = require('../middleware/auth');


router.get('/', auth, publicationCtrl.getAllPosts);
router.post('/', auth, multer, publicationCtrl.createPost);
router.post('/comment', auth, publicationCtrl.createComment);
router.get('/comment/:postId', auth, publicationCtrl.getComment);
router.delete('/comment/:id/post/:idPost', auth, publicationCtrl.deleteComment);
router.delete('/:id', auth, publicationCtrl.deletePost);
// router.post("/:id/like", auth, publicationCtrl.setLike);

module.exports = router;
