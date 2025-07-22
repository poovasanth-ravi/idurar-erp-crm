const mongoose = require('mongoose');

const QueryModel = mongoose.model('Queries');

const queriesNotes = async (req, res) => {
  let body = req.body;
  const result = await QueryModel.findOneAndUpdate({
    _id: req.params.queryId,
    notes: body.notes,
  }).exec();
  console.log(result);
  return res.status(200).json({
    success: true,
    result: result,
    message: 'Please Upgrade to Premium  Version to have full features',
  });
};

module.exports = queriesNotes;
