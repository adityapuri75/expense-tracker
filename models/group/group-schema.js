const mongoose = require("mongoose");
const schemaType = require("../../types");

const groupSchema = new mongoose.Schema(
  {
    group_name: {
      type: schemaType.TypeString,
      required: true,
    },
    created_date: {
      type: schemaType.TypeDate,
      default: Date.now,
    },
  },
  { timestamps: true }
);

module.exports = groupSchema;
