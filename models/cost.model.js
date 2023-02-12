const mongoose = require("mongoose");
const constants = require("../utils/constants");
const crypto = require("crypto");

const {
  categories,
  dates,
  descriptionLength: descriptionLength,
  priceRange,
} = constants;
const { validDay, validMonth, validYear } = dates;

// Create a schema cost schema = { user_id, year, month, day, description, category, sum }
const costSchema = new mongoose.Schema(
  {
    id: {
      type: String,
      unique: true,
      default: () => {
        return crypto.randomBytes(16).toString("hex");
      },
    },
    user_id: {
      type: String,
      required: true,
    },
    year: {
      type: Number,
      min: validYear.min,
      max: validYear.max,
      required: true,
    },
    month: {
      type: Number,
      min: validMonth.min,
      max: validMonth.max,
      required: true,
    },
    day: {
      type: Number,
      min: validDay.min,
      max: validDay.max,
      required: true,
    },
    description: {
      type: String,
      minLength: descriptionLength.min,
      maxLength: descriptionLength.max,
      required: false,
    },
    category: {
      type: String,
      enum: categories,
      required: true,
    },
    sum: {
      type: Number,
      min: priceRange.min,
      max: priceRange.max,
      required: true,
    },
  },
  {
    collection: "costs",
  }
);

const Cost = mongoose.model("Cost", costSchema);
module.exports = Cost;
