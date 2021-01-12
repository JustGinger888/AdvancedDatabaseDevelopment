const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  members: {
    type: [[String]],
    required: true
  },
  chat: {
    type: [[String]],
  },
});

const User = mongoose.model('User', UserSchema);

module.exports = User;