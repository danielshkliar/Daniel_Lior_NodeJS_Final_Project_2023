// Daniel Shkliar - 208494906
//Lior Silman - 315318261

const aboutDevelopers = require("../utils/constants").aboutDevelopers;

// Get about devolopers
const getAbout = (req, res) => {
  res.status(200).json(aboutDevelopers);
};

exports.getAbout = getAbout;
