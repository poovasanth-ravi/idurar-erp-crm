const mongoose = require('mongoose');

const queriesSchema = new mongoose.Schema({
  removed: {
    type: Boolean,
    default: false,
  },
  createdBy: {
    type: mongoose.Schema.ObjectId,
    ref: 'Client',
    required: true,
    autopopulate: true,
  },
  message: { type: String, required: true },
  date: { type: Date, require: true },
  updated: { type: Date, default: Date.now },
  created: { type: Date, default: Date.now },
});

queriesSchema.plugin(require('mongoose-autopopulate'));
module.exports = mongoose.model('Queries', queriesSchema);
