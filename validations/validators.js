const {body} = require('express-validator');

exports.hasDescription = body('description')
  .isLength({min: 5})
  .withMessage("Description is required. Min Length 5 characters");
exports.isEmail = body('email')
  .isEmail()
  .withMessage('Email fields must contain a correct email address');
exports.hasPassword = body('password')
  .exists()
  .withMessage('Password is required/ cannot be empty');
exports.hasName = body('name')
  .isLength({min: 5})
  .withMessage("Name is required. Min Length 5 characters");