// Daniel Shkliar - 208494906
//Lior Silman - 315318261

const Cost = require("../models/cost.model");
const mongoose = require("mongoose");
const Report = require("../models/report.model");
const { categories } = require("../utils/constants");

// Get report
const getReport = async (req, res) => {
  // get user_id, month and year from query
  const { user_id, month, year } = req.query;
  // test if report exist in db for prototype pattern
  const existReport = await Report.findOne({
    user_id: user_id,
    month: month,
    year: year,
  });

  // test if report exist in db for computed design pattern
  if (!existReport) {
    console.log("report not exist");
    const costsBySelectedDate = await Cost.find({
      user_id,
      month,
      year,
    });

    // create new report scheme for selected date and user_id
    const report = new Report({
      user_id: user_id,
      year: year,
      month: month,
    });

    // if there is no costs for selected date, than it will be an unnecessary effort to sort by category
    if (costsBySelectedDate.length === 0) {
      categories.forEach((category) => {
        report[category] = [];
      });
    } else {
      // sort costs by category
      // in the forEach loop we already destructuring the object from type"cost"
      costsBySelectedDate.forEach(({ id, day, description, sum, category }) => {
        // if there is no category in report, than create it
        if (!report[category]) {
          report[category] = [];
        }
        // push cost to category
        report[category].push({ id, day, description, sum });
      });
    }
    // save report to db
    try {
      await report.save();
      res.status(201).json(report);
    } catch (err) {
      // if there is an error, than send error message
      res.status(500).json({ error: `${err} Invalid request` });
    }
  } else {
    // if report exist, than send it to client
    console.log("report exist");
    res.status(201).json(existReport);
  }
};
exports.getReport = getReport;
