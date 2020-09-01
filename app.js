const express = require('express');
const bodyParser = require('body-parser');

const detailsRouter = require('./routes/details');
const user = require('./models/model');

var app = express();
app.use(bodyParser.json());

   const testDoc = {
      name: "Sarthak Jha",
      branch: "CSE",
      DOB: "04-04-2001",
      interest: [
        "test1", "test2", "test3"
      ]
    }
    user.create(testDoc)
    .then((user)=> {
      console.log("user successfully added!");
    }).catch((err)=> {
      console.log(`error adding the user: ${err}`)
    });
app.use(detailsRouter);

app.use(function (err, req, res, next) {
  console.error(err.stack)
  res.status(500).send('Something broke!')
})
module.exports = app;