/*

  food: [],
  health: [],
  housing: [],
  sport: [],
  education: [],
  transportation: [],
  other: []
*/

const mongoose = require("mongoose");
const constants = require("../utils/constants");
const {
  categories,
  dates,
  descriptionLength: descriptionLength,
  priceRange,
} = constants;
const { validDay, validMonth, validYear } = dates;

const reportSchema = new mongoose.Schema(
  {
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

    food: [
      {
        id: {
          type: String,
          required: true,
        },
        day: {
          type: Number,
          min: validDay.min,
          max: validDay.max,
          required: true,
          default: 0,
        },
        description: {
          type: String,
          minLength: descriptionLength.min,
          maxLength: descriptionLength.max,
          required: false,
        },
        sum: {
          type: Number,
          min: priceRange.min,
          max: priceRange.max,
          required: true,
          default: 0,
        },
      },
    ],
    health: [
      {
        id: {
          type: String,
          required: true,
        },
        day: {
          type: Number,
          min: validDay.min,
          max: validDay.max,
          required: true,
          default: 0,
        },
        description: {
          type: String,
          minLength: descriptionLength.min,
          maxLength: descriptionLength.max,
          required: false,
        },
        sum: {
          type: Number,
          min: priceRange.min,
          max: priceRange.max,
          required: true,
          default: 0,
        },
      },
    ],
    housing: [
      {
        id: {
          type: String,
          required: true,
        },
        day: {
          type: Number,
          min: validDay.min,
          max: validDay.max,
          required: true,
          default: 0,
        },
        description: {
          type: String,
          minLength: descriptionLength.min,
          maxLength: descriptionLength.max,
          required: false,
        },
        sum: {
          type: Number,
          min: priceRange.min,
          max: priceRange.max,
          required: true,
          default: 0,
        },
      },
    ],
    sport: [
      {
        id: {
          type: String,
          required: true,
        },
        day: {
          type: Number,
          min: validDay.min,
          max: validDay.max,
          required: true,
          default: 0,
        },
        description: {
          type: String,
          minLength: descriptionLength.min,
          maxLength: descriptionLength.max,
          required: false,
        },
        sum: {
          type: Number,
          min: priceRange.min,
          max: priceRange.max,
          required: true,
          default: 0,
        },
      },
    ],
    education: [
      {
        id: {
          type: String,
          required: true,
        },
        day: {
          type: Number,
          min: validDay.min,
          max: validDay.max,
          required: true,
          default: 0,
        },
        description: {
          type: String,
          minLength: descriptionLength.min,
          maxLength: descriptionLength.max,
          required: false,
          default: "",
        },
        sum: {
          type: Number,
          min: priceRange.min,
          max: priceRange.max,
          required: true,
          default: 0,
        },
      },
    ],
    transportation: [
      {
        id: {
          type: String,
          required: true,
        },
        day: {
          type: Number,
          min: validDay.min,
          max: validDay.max,
          required: true,
          default: 0,
        },
        description: {
          type: String,
          minLength: descriptionLength.min,
          maxLength: descriptionLength.max,
          required: false,
          default: "",
        },
        sum: {
          type: Number,
          min: priceRange.min,
          max: priceRange.max,
          required: true,
          default: 0,
        },
      },
    ],
    other: [
      {
        id: {
          type: String,
          required: true,
        },
        day: {
          type: Number,
          min: validDay.min,
          max: validDay.max,
          required: true,
          default: 0,
        },
        description: {
          type: String,
          minLength: descriptionLength.min,
          maxLength: descriptionLength.max,
          required: false,
          default: "",
        },
        sum: {
          type: Number,
          min: priceRange.min,
          max: priceRange.max,
          required: true,
          default: 0,
        },
      },
    ],
  },
  {
    collection: "reports",
  }
);

const Report = mongoose.model("Report", reportSchema);
module.exports = Report;
