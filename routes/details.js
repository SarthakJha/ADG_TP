const express = require('express');
const detailsRouter = express.Router();
const user = require('./../models/model');

detailsRouter.route('/details')
  .get((req,res,next)=> {
    
    user.find()
      .then((users)=> {
        res.status(200).json(users);
      }).catch((err)=> {
        res.status(404).json(err);
      })
  })

  module.exports = detailsRouter;