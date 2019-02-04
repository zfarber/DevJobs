require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const hotMiddleware = require('./environment');

// REQUIRE MODELS
const { Job } = require('./models');

// start express
const app = express();

app.set('port', process.env.PORT || 3000);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(hotMiddleware(app.get('env')));

// REQUIRE ROUTERS
const signUpRouter = require('./routes/signUpRouter');
const jobRouter = require('./routes/jobRouter');

// ROUTE HANDLERS
app.use('/signup', signUpRouter);
app.use('/job', jobRouter);

// GLOBAL ERROR HANDLER
app.use((err, req, res, next) => {
  res.status(500).send(err);
});

module.exports = app;
