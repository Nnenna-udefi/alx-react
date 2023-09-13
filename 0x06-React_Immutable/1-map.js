import Immutable from 'immutable';

const getImmutableObject = (object) => {
    const immutableMap = Immutable.Map(object);
    // Use fromJS to convert the input object into an immutable Map
    return immutableMap;
};

export default getImmutableObject;