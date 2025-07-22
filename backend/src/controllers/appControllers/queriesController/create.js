const mongoose = require('mongoose');
const Model = mongoose.model('Queries');

const create = async (req, res) => {
  let body = req.body;

  // Creating a new document in the collection
  const result = await new Model(body).save();

  const updateResult = await Model.findOneAndUpdate(
    { _id: result._id },
    {
      new: true,
    }
  ).exec();

  // Returning successfull response
  return res.status(200).json({
    success: true,
    result: updateResult,
    message: 'Quote created successfully',
  });
};
module.exports = create;
