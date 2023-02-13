// Daniel Shkliar - 208494906
//Lior Silman - 315318261

const categories = [
  "food",
  "health",
  "housing",
  "sport",
  "education",
  "transportation",
  "other",
];

const initialReportCategories = {
  food: [],
  health: [],
  housing: [],
  sport: [],
  education: [],
  transportation: [],
  other: [],
};

const dates = {
  validDay: { type: Number, min: 1, max: 31 },
  validMonth: { type: Number, min: 1, max: 12 },
  validYear: { type: Number, min: 1900, max: 2100 },
};

const descriptionLength = { min: 1, max: 150 };
const priceRange = { min: 0, max: 1000000 };

const LiorAndDanielDetails = [
  {
    firstName: "Lior",
    lastName: "Silman",
    id: "315318261",
    email: "lior.silmansoad@gmail.com",
  },
  {
    firstName: "Daniel ",
    lastName: "Shkliar",
    id: "208494906",
    email: "Daniel.shkliar@gmail.com",
  },
];

module.exports = {
  categories: categories,
  dates: dates,
  descriptionLength: descriptionLength,
  priceRange: priceRange,
  initialReportCategories: initialReportCategories,
  aboutDevelopers: LiorAndDanielDetails,
};
