const { User } = require('../models');

module.exports = {
  async create(req, res, next) {
    try {
      const {
        username, password, name, description, zipcode, industryWanted, titleWanted, portfolio_url,
      } = req.body;
      const newUser = await User.create({
        username, password, name, description, zipcode, industryWanted, titleWanted, portfolio_url,
      });
      res.locals.user = newUser;
      next();
    } catch (err) {
      next(err);
    }
  },

  async getOne(req, res, next) {
    try {
      const id = Number.parseInt(req.params.user_id, 10);
      res.locals.Users = await User.findOne({
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
      res.locals.users = await User.findAll({
        rejectOnEmpty: true,
      });
      next();
    } catch (e) {
      next(e);
    }
  },

  async update(req, res, next) {
    try {
      const id = Number.parseInt(req.params.user_id, 10);
      const {
        companyImage, companyName, UserTitle, description, location, type, portfolio_url,
      } = req.body;
      const [, updatedUser] = await User.update({
        companyImage, companyName, UserTitle, description, location, type, portfolio_url,
      }, {
        where: { id },
        limit: 1,
        rejectOnEmpty: true,
        returning: true,
      });
      res.locals.user = updatedUser;
      next();
    } catch (err) {
      next(err);
    }
  },

  async destroy(req, res, next) {
    try {
      const id = Number.parseInt(req.params.user_id, 10);
      await User.destroy({
        where: { id },
        limit: 1,
      });
      next();
    } catch (err) {
      next(err);
    }
  },
};
