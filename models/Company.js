var mongoose = require("mongoose");

var CompanySchema = new mongoose.Schema({
  company_name: {
    type: String,
    unique: false,
  },
  Date: Date,
  open: Number,
  high: Number,
  close: Number,
  adj_close: Number,
  low: Number,
  Volume: Number,
});

module.exports = new mongoose.model("Company", CompanySchema);
