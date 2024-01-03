const mongoose = require("mongoose");
const groupSchema = require("./group-schema");

const group = mongoose.model("groups", groupSchema);

module.exports = group;
