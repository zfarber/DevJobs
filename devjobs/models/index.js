const Sequelize = require('sequelize');

const db = new Sequelize({
  database: 'devjobs',
  dialect: 'postgres',
  define: {
    underscored: true,
    returning: true,
  },
});

const User = db.define('user', {
  username: {
    type: Sequelize.STRING(32),
    validate: {
      notEmpty: {
        args: true,
        msg: 'Required',
      },
      len: {
        args: [4, 32],
        msg: 'Username must be between 4 and 32 characters long.',
      },
    },
    unique: true,
  },
  password: {
    type: Sequelize.STRING(),
    validate: {
      notEmpty: {
        args: true,
        msg: 'Required',
      },
      len: {
        args: [8, 32],
        msg: 'Password must be between 8 and 32 characters long.',
      },
    },
  },
  name: Sequelize.STRING(128),
  description: Sequelize.STRING(255),
  zipcode: Sequelize.STRING(5),
  industryWanted: Sequelize.STRING(128),
  titleWanted: Sequelize.STRING(128),
});

const Job = db.define('job', {
  title: Sequelize.STRING(128),
  zipcode: Sequelize.STRING(5),
  startDate: Sequelize.STRING(128),
  endDate: Sequelize.STRING(128),
  details: Sequelize.STRING(255),
});


User.belongsToMany(Job, { through: 'user_job_xref' });
Job.belongsToMany(User, { through: 'user_job_xref' });

module.exports = {
  User,
  Job,
  db,
};
