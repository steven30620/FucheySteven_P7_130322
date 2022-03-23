const express = require("express");
const router = express.Router();
const publicationCtrl = require("../controllers/publication");
const multer = require("../middleware/multer-config");
const auth = require("../middleware/auth");
const rateLimit = require("../middleware/rateLimit");

//toutes les routes sauces de l'API, contien les midleware auth pour que ce sois sécurisé.
// router.get("/", auth, publicationCtrl.getAllSauces);
router.post("/", auth, multer, publicationCtrl.createPost);
// router.get("/:id", auth, publicationCtrl.getOneSauce);
// router.put("/:id", auth, multer, publicationCtrl.modifySauce);
// router.delete("/:id", auth, publicationCtrl.deleteSauce);
// router.post("/:id/like", auth, publicationCtrl.setLike);

module.exports = router;
