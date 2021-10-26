"use strict";

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Schema = _mongoose.default.Schema;
let indicator = new Schema({
  indicatorName: String,
  metrics: [String]
});
let activities = new Schema({
  Name: String,
  indicator: [indicator]
});
let data_Schema = new Schema({
  LearningEvents: String,
  LearningActivities: [activities]
});
module.exports = _mongoose.default.model('data', data_Schema);