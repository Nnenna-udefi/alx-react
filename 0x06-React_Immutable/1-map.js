import { Map } from 'immutable';

// converts it into an immutable Map using Map of the Immutable.js library
export default function getImmutableObject(object) {
  return Map(object);
};
