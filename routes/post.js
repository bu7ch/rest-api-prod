const express = require("express");
const router = express.Router();
const postController = require("../controllers/postController");
const { hasDescription } = require("../validations/validators");
const uploadImage = require('../middlewares/multer')


router.get("/", postController.index);
router.get("/:id", postController.show);
router.post("/",uploadImage('posts').single('image'), hasDescription, postController.store);

module.exports = router;
