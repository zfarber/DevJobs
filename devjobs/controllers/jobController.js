const { Job } = require('../models');

module.exports = {
  async create(req, res, next) {
    try {
      const {
        companyImage, companyName, jobTitle, description, location, type, jobURL,
      } = req.body;
      const newJob = await Job.create({
        companyImage, companyName, jobTitle, description, location, type, jobURL,
      });
      res.locals.job = newJob;
      next();
    } catch (err) {
      next(err);
    }
  },

  async getOne(req, res, next) {
    try {
      const id = Number.parseInt(req.params.job_id, 10);
      res.locals.jobs = await Job.findOne({
        where: { id },
        rejectOnEmpty: true,
      });
      next();
    } catch (e) {
      next(e);
    }
  },

  async index(req, res, next) {
    try {
      res.locals.jobs = await Job.findAll({
        rejectOnEmpty: true,
      });
      next();
    } catch (e) {
      next(e);
    }
  },

  async update(req, res, next) {
    try {
      const id = Number.parseInt(req.params.job_id, 10);
      const {
        companyImage, companyName, jobTitle, description, location, type, jobURL,
      } = req.body;
      const [, updatedJob] = await Job.update({
        companyImage, companyName, jobTitle, description, location, type, jobURL,
      }, {
        where: { id },
        limit: 1,
        rejectOnEmpty: true,
        returning: true,
      });
      res.locals.job = updatedJob;
      next();
    } catch (err) {
      next(err);
    }
  },

  async destroy(req, res, next) {
    try {
      const id = Number.parseInt(req.params.job_id, 10);
      await Job.destroy({
        where: { id },
        limit: 1,
      });
      next();
    } catch (err) {
      next(err);
    }
  },
};
