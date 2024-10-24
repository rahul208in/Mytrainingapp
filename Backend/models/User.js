
// backend/models/User.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['student', 'trainer'], required: true },
  created_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model('User', userSchema);
