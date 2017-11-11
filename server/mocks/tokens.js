/* eslint-env node */
'use strict';

module.exports = function(app) {
  const express = require('express');
  let tokensRouter = express.Router();

  tokensRouter.get('/', function(req, res) {
    res.send({
      'tokens': []
    });
  });

  tokensRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  tokensRouter.get('/:id', function(req, res) {
    res.send({
      'tokens': {
        id: req.params.id
      }
    });
  });

  tokensRouter.put('/:id', function(req, res) {
    res.send({
      'tokens': {
        id: req.params.id
      }
    });
  });

  tokensRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  // The POST and PUT call will not contain a request body
  // because the body-parser is not included by default.
  // To use req.body, run:

  //    npm install --save-dev body-parser

  // After installing, you need to `use` the body-parser for
  // this mock uncommenting the following line:
  //
  //app.use('/api/tokens', require('body-parser').json());
  app.use('/api/tokens', tokensRouter);
};
