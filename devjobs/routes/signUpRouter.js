const express = require('express');
const viewController = require('../controllers/viewController');
const signUpController = require('../controllers/signUpController');

const signUpRouter = express.Router({ mergeParams: true });

signUpRouter.route('/')
  .post(signUpController.addUser, viewController.goToLogin);

signUpRouter.use((err, req, res, next) => {
  res.sendStatus(404);
});

module.exports = signUpRouter;
