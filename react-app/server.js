const app = require('./app');

// START SERVER
app.listen(app.get('port'), () => {
  console.log(`Server up and listening on port ${app.get('port')}, in ${app.get('env')} mode.`);
}).on('error', console.error);

module.exports = app;
