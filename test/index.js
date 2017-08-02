'use strict';

const yServer = require('y-server');

const corsPlugin = require('../index.js');

yServer.run({
  plugins: [
    corsPlugin(),
    function (app) {
      app.get('/', function (req, res) {
        res.send('valid');
      });
    },
  ],
});
