const mongoose = require('mongoose');

const Model = mongoose.model('Queries');

const remove = async (req, res) => {
  const deletedNote = await Model.findOneAndUpdate(
    {
      _id: req.params.id,
      removed: false,
    },
    {
      $set: {
        removed: true,
      },
    }
  ).exec();

  if (!deletedNote) {
    return res.status(404).json({
      success: false,
      result: null,
      message: 'Invoice not found',
    });
  }
  // const paymentsInvoices = await QueriesNotes.updateMany(
  //   { notes: deletedNote._id },
  //   { $set: { removed: true } }
  // );
  return res.status(200).json({
    success: true,
    result: deletedNote,
    message: 'Invoice deleted successfully',
  });
};

module.exports = remove;
