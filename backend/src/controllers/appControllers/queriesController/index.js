const createCRUDController = require('@/controllers/middlewaresControllers/createCRUDController');
const methods = createCRUDController('Queries');

const create = require('./create');
const read = require('./read');
const update = require('./update');
// const remove = require('./remove');
const notes = require('./queriesNotes');

methods.create = create;
methods.read = read;
methods.update = update;
methods.notes = notes;
// methods.delete = remove;
module.exports = methods;
