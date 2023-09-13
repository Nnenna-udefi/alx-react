import { Immutable } from 'immutable';

export default function getImmutableObject(object) {
  const immutableMap = Immutable.Map(object);
  // Use fromJS to convert the input object into an immutable Map
  return immutableMap;
};

