const Sequelize = require('sequelize');

const db = new Sequelize({
  database: 'devjobs',
  dialect:  'postgres',
  define:   {
    underscored: true,
    returning:   true,
  },
});

const User = db.define('candidate', {
  username: {
    type:     Sequelize.STRING(32),
    validate: {
      notEmpty: {
        args: true,
        msg:  'Required',
      },
      len: {
        args: [4, 32],
        msg:  'Username must be between 4 and 32 characters long.',
      },
    },
    unique: true,
  },
  password: {
    type:     Sequelize.STRING(),
    validate: {
      notEmpty: {
        args: true,
        msg:  'Required',
      },
      len: {
        args: [8, 32],
        msg:  'Password must be between 8 and 32 characters long.',
      },
    },
  },
  name:           Sequelize.STRING(128),
  description:    Sequelize.String(255),
  zipcode:        Sequelize.String(5),
  industryWanted: Sequelize.String(128),
  titleWanted:    Sequelize.String(128),
});

const Job = db.define('job', {
  title:     Sequelize.String(128),
  zipcode:   Sequelize.String(5),
  startDate: Sequelize.String(128),
  endDate:   Sequelize.String(128),
  details:   Sequelize.String(255),
});

User.hasMany(Job);
Job.belongsTo(User);

module.exports = {
	User,
	Job,
	db,
}
