const db = require('../models');

module.exports = {
  addJob(req, res, next) {
    db.Job.create({
      companyImage: req.body.companyImage,
      companyName: req.body.companyName,
      jobTitle: req.body.jobTitle,
      description: req.body.description,
      location: req.body.location,
      type: req.body.type,
    });
    next();
  },
};
