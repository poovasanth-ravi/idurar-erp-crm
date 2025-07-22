const mongoose = require('mongoose');

const queriesSchema = new mongoose.Schema({
  createdBy: {
    type: mongoose.Schema.ObjectId,
    ref: 'Client',
    required: true,
    autopopulate: true,
  },
  description: { type: String, required: true },
  resolution: { type: String, required: false },
  status: {
    type: String,
    enum: ['open', 'in progress', 'closed'],
    default: 'draft',
    required: true,
  },
  notes: [
    {
      id: { type: String, required: false },
      note: {
        type: String,
        required: false,
      },
    },
  ],
  date: { type: Date, require: true },
  updated: { type: Date, default: Date.now },
  created: { type: Date, default: Date.now },
});

queriesSchema.plugin(require('mongoose-autopopulate'));
module.exports = mongoose.model('Queries', queriesSchema);
