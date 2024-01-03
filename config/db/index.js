const mongoose = require("mongoose");
const { DB_URL, DB_NAME } = require("../");

mongoose.connect(
  `${DB_URL}/${DB_NAME}`
);

module.exports = mongoose;
