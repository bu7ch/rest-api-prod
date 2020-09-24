const { body } = require("express-validator/check");

exports.hasName = body("name")
  .isLength({ min: 5 })
  .withMessage("Name is required. min length 5 characters");
exports.isEmail = body("email")
  .isEmail()
  .withMessage('Email fields must contain a correct email address')
exports.hasDescription = body("description")
  .isLength({ min: 5 })
  .withMessage("Description is required. Min length 5 characters");