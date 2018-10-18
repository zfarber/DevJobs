require('dotenv').config();
const express           = require('express');
const bodyParser        = require('body-parser');
const hotMiddleware     = require('./environment');

// start express
const app = express();

app.set('port', process.env.PORT || 3000);
app.use(bodyParser.json());


app.use(hotMiddleware(app.get('env')));

// REQUIRE ROUTERS
const signUpRouter = require('./routes/signUpRouter');

// ROUTE HANDLERS
app.use('/signup', signUpRouter);


// GLOBAL ERROR HANDLER
app.use((err, req, res, next) => {
  res.status(500).send(err);
});


// START SERVER
app.listen(app.get('port'), () => {
  console.log(`Server up and listening on port ${app.get('port')}, in ${app.get('env')} mode.`);
}).on('error', console.error);

module.exports = app;
