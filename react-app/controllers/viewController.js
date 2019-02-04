module.exports = {
  goToLogin(req, res) {
    res.redirect('/#/login');
  },

  goToHomePage(req, res) {
    res.redirect('/#/');
  },

  showJSON(req, res) {
    res.json(res.locals);
  },
};
