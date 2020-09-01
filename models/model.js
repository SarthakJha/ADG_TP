const mongoose = require('mongoose');

const infoSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  branch: {
    type: String,
    required: true
  },
  interest: {
    type: [String],
    required: true
  }, 
  DOB: {
    type: Date,
    required: true
  }
});

const user = mongoose.model('User',infoSchema);

module.exports = user;