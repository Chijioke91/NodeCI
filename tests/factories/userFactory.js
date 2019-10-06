const { model } = require('mongoose');
const User = model('User');

module.exports = () => {
  return new User({}).save();
};
