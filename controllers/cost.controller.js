// Daniel Shkliar - 208494906
//Lior Silman - 315318261

const Cost = require("../models/cost.model");
const mongoose = require("mongoose");

// Post cost
const postCost = async (req, res) => {
  // get relevant data from body
  const { user_id, year, month, day, description, category, sum } = req.body;

  // create new cost scheme
  const cost = await new Cost({
    user_id,
    year,
    month,
    day,
    description,
    category,
    sum,
  });
  // save cost to db
  try {
    await cost.save();
    res.status(201).json({ message: "Cost added Successfully" });
  } catch (err) {
    // if there is an error, than send error message
    res.status(500).json({ error: `${err} Invalid request` });
  }
};

exports.postCost = postCost;
