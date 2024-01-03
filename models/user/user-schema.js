const mongoose = require("mongoose");
const schemaType = require("../../types");

const userSchema = new mongoose.Schema(
  {
    username: {
      type: schemaType.TypeString,
      required: true,
    },
    email: {
      type: schemaType.TypeString,
      required: true,
      unique: true,
    },
    status: {
      type: schemaType.TypeString,
      default: "Active",
    },
    type: {
      type: schemaType.ObjectID,
      ref: "user-types",
    },
    created_date: {
      type: schemaType.TypeDate,
      default: Date.now,
    },
  },
  { timestamps: true }
);

module.exports = userSchema;
