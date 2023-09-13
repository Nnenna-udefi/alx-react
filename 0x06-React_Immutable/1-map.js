const Immutable = require('immutable');

function getImmutableObject(object) {
  return Immutable.Map(object);
};
module.exports = getImmutableObject;
