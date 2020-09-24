const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController')
const  {hasName} = require('../validations/validators')
//TODO: add image
 


router.get('/', postController.index ) 
router.get('/:id', postController.show)
router.post('/',hasName ,postController.save)

module.exports = router;