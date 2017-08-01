'use strict';

const yServer = require('y-server');

const cors = require('../index.js');

yServer.run({
  plugins: [
    cors(),
    function (app) {
      app.get('/', function (req, res) {
        res.send('valid');
      });
    },
  ],
});
