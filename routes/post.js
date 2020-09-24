const express = require("express");
const router = express.Router();
const postController = require("../controllers/postController");
const { hasDescription } = require("../validations/validators");
//TODO: add image

router.get("/", postController.index);
router.get("/:id", postController.show);
router.post("/", hasDescription, postController.store);

module.exports = router;
