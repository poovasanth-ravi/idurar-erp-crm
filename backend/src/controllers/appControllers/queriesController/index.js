const createCRUDController = require('@/controllers/middlewaresControllers/createCRUDController');
const methods = createCRUDController('Queries');

const create = require('./create');

methods.create = create;
module.exports = methods;
