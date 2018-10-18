const db = require('../models');

module.exports = {
  addUser(req, res, next) {
    debugger;
    db.User.create({
      username:       req.body.username,
      password:       req.body.password,
      name:           req.body.name,
      description:    req.body.description,
      zipcode:        req.body.zipcode,
      industryWanted: req.body.industryWanted,
      titleWanted:    req.body.titleWanted,
    });
    next();
  },
};
