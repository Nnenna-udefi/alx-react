import { fromJS } from 'immutable';

// converts the object into an immutable Map using fromJS of the Immutable.js library
export default function getImmutableObject(object) {
  return fromJS(object);
}