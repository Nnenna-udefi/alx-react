// import Immutable from 'immutable';
const Immutable = require('immutable');

function accessImmutableObject(object, array) {
  const immutableObject = Immutable.fromJS(object);
  return immutableObject.getIn(array, undefined);
}

module.exports = accessImmutableObject;