const express = require('express');
const viewController = require('../controllers/viewController');
const jobController = require('../controllers/jobController');

const jobRouter = express.Router({ mergeParams: true });

jobRouter.route('/:job_id')
  .get(jobController.getOne)
  .put(jobController.update)
  // , viewController.handleUpdate, viewController.badCreate)
  .delete(jobController.destroy);

jobRouter.route('/')
  .get(jobController.index)
  // , viewController.showJobs)
  .post(jobController.create, viewController.goToHomePage);

jobRouter.use(viewController.showJSON, (err, req, res, next) => {
  res.sendStatus(404);
});

module.exports = jobRouter;
