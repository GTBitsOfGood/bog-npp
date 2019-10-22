const mongoose = require('mongoose');

const { Schema } = mongoose;

// Create Schema
const ApplicationSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  website: {
    type: String,
    required: false,
  },
  workPhone: {
    type: String,
    required: true,
  },
  contactName: {
    type: String,
    required: true,
  },
  mobilePhone: {
    type: String,
    required: false,
  },
  email: {
    type: String,
    required: true,
  },
  mission: {
    type: String,
    required: true,
  },
  needsWeb: {
    type: String,
    required: false,
  },
  needsMobile: {
    type: String,
    required: false,
  },
  needsOther: {
    type: String,
    required: false,
  },
  needsOtherExpand: {
    type: String,
    required: false,
  },
  stageNew: {
    type: String,
    required: false,
  },
  stageRadio: {
    type: String,
    required: false,
  },
  stageOtherExpand: {
    type: String,
    required: false,
  },
  availRadio: {
    type: String,
    required: false,
  },
  fieldRadio: {
    type: String,
    required: false,
  },
  productExtra: {
    type: String,
    required: false,
  },
  feedback: {
    type: String,
    required: false,
  },
  status: {
    type: Number,
    default: 0,
  },
  urlString: {
    type: String,
    required: true,
  },
  decision: {
    type: Boolean,
    default: false,
  },
});

let Application;

if (mongoose.models.Application) {
  Application = mongoose.model('Application');
} else {
  Application = mongoose.model('Application', ApplicationSchema);
}

module.exports = Application;