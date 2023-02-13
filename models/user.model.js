// Daniel Shkliar - 208494906
//Lior Silman - 315318261

const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  id: {
    type: Long,
    unique: true,
    required: true,
  },
  first_name: {
    type: String,
    required: true,
  },
  last_name: {
    type: String,
    required: true,
  },
  birthday: {
    type: Date,
    required: true,
  },
});

const User = mongoose.model("User", userSchema);
module.exports = User;
