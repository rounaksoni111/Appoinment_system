const path = require('path');
const Routes = require('express').Router();
const { env } = require('../lib/config');

Routes.get('*', (req, res) => {
  if (env === 'dev' || env === 'uat' || env === 'prod') {
    const route = path.join(__dirname, '..', 'dist', 'index.html');
    res.sendFile(route);
  } else if (env === 'test') {
    const route = path.join(__dirname, '..', '..', 'dist', 'index.html');
    res.sendFile(route);
  } else {
    const route = path.join(__dirname, '..', '..', 'public', 'index.html');
    res.sendFile(route);
  }
});

module.exports = Routes;
