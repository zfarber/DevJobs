const express = require('express');
const viewController = require('../controllers/viewController');
const jobController = require('../controllers/jobController');

const jobRouter = express.Router({ mergeParams: true });

jobRouter.route('/')
  .post(jobController.addJob, viewController.goToHomePage);

jobRouter.use((err, req, res, next) => {
  res.sendStatus(404);
});

module.exports = jobRouter;
