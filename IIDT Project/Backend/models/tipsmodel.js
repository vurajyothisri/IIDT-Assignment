
const mongoose = require('mongoose');

const tipSchema = new mongoose.Schema({
  username: String,
  text: String,
});

module.exports = mongoose.model('Tip', tipSchema);

